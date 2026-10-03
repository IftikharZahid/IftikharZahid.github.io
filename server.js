/**
 * MCQs Question Bank — MongoDB Atlas Local API Server
 * Provides REST API endpoints for the Web UI to sync, query, and upload MCQs to MongoDB Atlas.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const dns = require('dns');

try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {}

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.MONGODB_DB || "mcqs_bank";
const COLLECTION_NAME = process.env.MONGODB_COLLECTION || "subjects";

let client = null;
let db = null;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function serveStatic(req, res, pathname) {
  let relativePath = pathname;
  if (relativePath === '/' || relativePath === '/qb' || relativePath === '/qb/') {
    relativePath = '/qb/index.html';
  } else if (!relativePath.startsWith('/qb/') && fs.existsSync(path.join(__dirname, 'qb', relativePath.replace(/^\//, '')))) {
    relativePath = '/qb' + relativePath;
  }

  const safePath = path.normalize(path.join(__dirname, relativePath)).replace(/\\/g, '/');
  const basePath = path.normalize(__dirname).replace(/\\/g, '/');
  if (!safePath.startsWith(basePath)) {
    res.writeHead(403);
    res.end('Forbidden');
    return true;
  }

  if (fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(safePath).pipe(res);
    return true;
  }
  return false;
}

let connectPromise = null;

async function initMongo() {
  if (db) return db;
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not configured in .env file. Please check your .env settings.");
  }
  if (!connectPromise) {
    connectPromise = (async () => {
      try {
        client = new MongoClient(MONGODB_URI, {
          serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          },
          serverSelectionTimeoutMS: 10000
        });
        await client.connect();
        db = client.db(DB_NAME);
        console.log(`[MongoDB] Connected to database '${DB_NAME}' on Atlas.`);
        return db;
      } catch (err) {
        connectPromise = null;
        throw err;
      }
    })();
  }
  return connectPromise;
}

function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // Serve static files for frontend application
  if (!pathname.startsWith('/api')) {
    if (serveStatic(req, res, pathname)) return;
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('404 Not Found');
  }

  try {
    const database = await initMongo();

    // 1. Health / Status Endpoint
    if (pathname === '/api/status' && req.method === 'GET') {
      const ping = await database.command({ ping: 1 });
      const subjectsCount = await database.collection(COLLECTION_NAME).countDocuments();
      const questionsCount = await database.collection("questions").countDocuments();

      return sendJSON(res, 200, {
        status: "ok",
        connected: ping.ok === 1,
        database: DB_NAME,
        collection: COLLECTION_NAME,
        subjectsCount,
        questionsCount,
        cluster: "cluster0.3kgnmwl.mongodb.net",
        timestamp: new Date()
      });
    }

    // 2. Get All Subjects
    if (pathname === '/api/subjects' && req.method === 'GET') {
      const subjects = await database.collection(COLLECTION_NAME).find({}).project({
        id: 1,
        book: 1,
        course: 1,
        week: 1,
        weekTitle: 1,
        topic: 1,
        level: 1,
        createdBy: 1,
        totalQuestions: 1,
        uploadedAt: 1
      }).toArray();

      return sendJSON(res, 200, { success: true, count: subjects.length, subjects });
    }

    // 3. Get Single Subject with MCQs
    if (pathname.startsWith('/api/subjects/') && req.method === 'GET') {
      const subjectId = pathname.replace('/api/subjects/', '').trim();
      const subject = await database.collection(COLLECTION_NAME).findOne({ id: subjectId });
      if (!subject) {
        return sendJSON(res, 404, { success: false, error: "Subject not found in MongoDB" });
      }
      return sendJSON(res, 200, { success: true, subject });
    }

    // 3b. Delete Single Subject and its MCQs
    if (pathname.startsWith('/api/subjects/') && req.method === 'DELETE') {
      const subjectId = pathname.replace('/api/subjects/', '').trim();
      const delSub = await database.collection(COLLECTION_NAME).deleteOne({ id: subjectId });
      const delQ = await database.collection("questions").deleteMany({ subjectId });
      return sendJSON(res, 200, {
        success: true,
        message: `Deleted subject '${subjectId}' (${delQ.deletedCount} MCQs removed).`,
        deletedSubject: delSub.deletedCount > 0,
        deletedQuestionsCount: delQ.deletedCount
      });
    }

    // 4. Upload / Import JSON Document into MongoDB
    if (pathname === '/api/upload' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          const payload = JSON.parse(body);
          if (!payload || typeof payload !== 'object') {
            return sendJSON(res, 400, { success: false, error: "Invalid JSON body" });
          }

          // Normalize payload
          let record = null;
          if (payload.id && Array.isArray(payload.questions)) {
            // Already normalized subject object
            record = {
              ...payload,
              totalQuestions: payload.questions.length,
              uploadedAt: new Date()
            };
          } else if (Array.isArray(payload)) {
            // Direct JSON array of MCQs: [ { id: 1, question: ..., options: [...], ... }, ... ]
            const rawList = payload;
            const q0 = rawList[0] || {};
            const bookTitle = q0.subject || q0.book || q0.course || "Object-Oriented Programming";
            const chapter = q0.chapter || q0.topic || "Week 1";
            const weekNum = parseInt(String(chapter).replace(/\D/g, '')) || 1;
            const weekTitle = String(chapter).toLowerCase().startsWith("week")
              ? chapter
              : `Week ${weekNum}`;
            const slug = (bookTitle + "-" + (chapter.toLowerCase().includes("week") ? chapter : `week-${weekNum}`)).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            const topic = q0.topic || q0.chapter || bookTitle;

            record = {
              id: slug,
              book: bookTitle,
              course: q0.course || bookTitle,
              week: weekNum,
              weekTitle: weekTitle,
              topic: topic,
              level: q0.level || "BS Computer Science",
              createdBy: q0.createdBy || "Course Instructor",
              icon: "📚",
              isBuiltIn: false,
              totalQuestions: rawList.length,
              questions: rawList.map((q, idx) => ({
                id: q.id || (idx + 1),
                questionIndex: q.questionIndex || q.id || (idx + 1),
                subject: q.subject || bookTitle,
                chapter: q.chapter || chapter,
                topic: q.topic || topic,
                difficulty: q.difficulty || "Medium",
                question: (q.question || q.prompt || "").trim(),
                options: Array.isArray(q.options) ? q.options : (typeof q.options === 'object' && q.options ? Object.values(q.options) : []),
                answer: typeof q.answer === 'number' ? q.answer : 0,
                explanation: (q.explanation || "").trim(),
                type: q.type || "single"
              })),
              uploadedAt: new Date()
            };
          } else {
            // Raw question bank format: { questionBank: { ... }, questions: [...] }
            const root = payload.questionBank || payload.metadata || payload;
            const bookTitle = root.book || root.subject || root.title || root.courseCode || "Custom Question Bank";
            const weekNum = Number(root.week || root.weekNo) || 1;
            const weekTitle = root.weekTitle || root.section || (root.week ? `Week ${root.week}` : `Week ${weekNum}`);
            const slug = (bookTitle + "-" + (root.weekTitle || root.section || `week-${weekNum}`)).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
            const rawList = Array.isArray(payload.mcqs) ? payload.mcqs :
                           (Array.isArray(payload.questions) ? payload.questions :
                           (Array.isArray(root.mcqs) ? root.mcqs :
                           (Array.isArray(root.questions) ? root.questions :
                           (Array.isArray(root.data) ? root.data : []))));

            record = {
              id: slug,
              book: bookTitle,
              course: root.course || bookTitle,
              week: weekNum,
              weekTitle: weekTitle,
              topic: root.topic || root.syllabusCoverage || bookTitle,
              level: root.level || root.class || root.program || "BS Computer Science",
              createdBy: root.createdBy || root.preparedBy || root.author || "Course Instructor",
              icon: "📚",
              isBuiltIn: false,
              totalQuestions: rawList.length,
              questions: rawList.map((q, idx) => ({
                id: q.id || (idx + 1),
                questionIndex: q.questionIndex || q.id || (idx + 1),
                subject: q.subject || bookTitle,
                chapter: q.chapter || root.topic || root.syllabusCoverage || bookTitle,
                topic: q.topic || root.topic || bookTitle,
                difficulty: q.difficulty || "Medium",
                question: (q.question || q.prompt || "").trim(),
                options: Array.isArray(q.options) ? q.options : (typeof q.options === 'object' && q.options ? Object.values(q.options) : []),
                answer: typeof q.answer === 'number' ? q.answer : 0,
                explanation: (q.explanation || "").trim(),
                type: q.type || "single"
              })),
              uploadedAt: new Date()
            };
          }

          // Save to MongoDB subjects collection
          const result = await database.collection(COLLECTION_NAME).updateOne(
            { id: record.id },
            { $set: record },
            { upsert: true }
          );

          // Sync individual questions into questions collection
          if (Array.isArray(record.questions) && record.questions.length) {
            const bulk = record.questions.map((q, idx) => ({
              updateOne: {
                filter: { subjectId: record.id, questionIndex: q.questionIndex || q.id || (idx + 1) },
                update: {
                  $set: {
                    ...q,
                    id: q.id || (idx + 1),
                    questionIndex: q.questionIndex || q.id || (idx + 1),
                    subjectId: record.id,
                    book: record.book,
                    course: record.course,
                    weekTitle: record.weekTitle,
                    updatedAt: new Date()
                  }
                },
                upsert: true
              }
            }));
            await database.collection("questions").bulkWrite(bulk);
          }

          console.log(`[API] Saved '${record.book}' (${record.totalQuestions} questions) to MongoDB.`);
          return sendJSON(res, 200, {
            success: true,
            message: `Successfully saved "${record.book}" (${record.totalQuestions} MCQs) to MongoDB Atlas!`,
            id: record.id,
            upserted: result.upsertedCount > 0
          });

        } catch (parseErr) {
          return sendJSON(res, 400, { success: false, error: parseErr.message });
        }
      });
      return;
    }

    // 5. Query Individual Questions from MongoDB
    if (pathname === '/api/questions' && req.method === 'GET') {
      const subjectId = url.searchParams.get('subjectId');
      const difficulty = url.searchParams.get('difficulty');
      const limit = parseInt(url.searchParams.get('limit') || '200', 10);
      const query = {};
      if (subjectId) query.subjectId = subjectId;
      if (difficulty) query.difficulty = difficulty;
      const questionsList = await database.collection("questions").find(query).limit(limit).toArray();
      return sendJSON(res, 200, { success: true, count: questionsList.length, questions: questionsList });
    }

    // 5b. Query Single Question by ID
    if (pathname.startsWith('/api/questions/') && req.method === 'GET') {
      const qId = pathname.replace('/api/questions/', '').trim();
      const question = await database.collection("questions").findOne({
        $or: [
          { _id: qId },
          { id: parseInt(qId, 10) || -1 },
          { questionIndex: parseInt(qId, 10) || -1 }
        ]
      });
      if (!question) {
        return sendJSON(res, 404, { success: false, error: "Question not found" });
      }
      return sendJSON(res, 200, { success: true, question });
    }

    // Default 404
    sendJSON(res, 404, { success: false, error: "API endpoint not found" });

  } catch (err) {
    console.error("[API Error]", err);
    sendJSON(res, 500, { success: false, error: err.message });
  }
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`MCQs Question Bank — MongoDB API Server running!`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Endpoints:`);
  console.log(` - GET  /api/status     (MongoDB health & stats)`);
  console.log(` - GET  /api/subjects   (List all books in MongoDB)`);
  console.log(` - GET  /api/subjects/:id (Get full subject with MCQs)`);
  console.log(` - POST /api/upload     (Upload MCQ JSON to MongoDB)`);
  console.log(`=======================================================`);
});
