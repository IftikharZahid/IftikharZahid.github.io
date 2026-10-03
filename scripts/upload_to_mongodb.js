/**
 * MCQs Question Bank — MongoDB Atlas JSON Uploader
 * Connects to MongoDB Atlas and uploads MCQ question sets from JSON files.
 *
 * Usage:
 *   node scripts/upload_to_mongodb.js qb/data/computer_architecture_week01.json
 *   node scripts/upload_to_mongodb.js qb/data/oop_adp_sem2_week03.json
 *   node scripts/upload_to_mongodb.js --all
 */

const fs = require('fs');
const path = require('path');
const dns = require('dns');

// Configure reliable DNS servers to avoid querySrv ECONNREFUSED on some networks/Windows
try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {
  // Ignore if custom dns is restricted
}

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is required. Please define it in your .env file.");
  process.exit(1);
}
const DB_NAME = process.env.MONGODB_DB || "mcqs_bank";
const COLLECTION_NAME = process.env.MONGODB_COLLECTION || "subjects";

function optText(o) {
  if (o === null || o === undefined) return "";
  if (typeof o === "string") return o;
  if (typeof o === "object") {
    return o.text !== undefined ? String(o.text) : (o.option !== undefined ? String(o.option) : JSON.stringify(o));
  }
  return String(o);
}

function normalizeMCQFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new Error(`Failed to parse JSON file '${filePath}': ${err.message}`);
  }

  let rawList = [];
  let meta = {};

  if (Array.isArray(parsed)) {
    rawList = parsed;
    const first = rawList[0] || {};
    const chapterStr = String(first.chapter || first.topic || "Week 1");
    const weekNum = parseInt(chapterStr.replace(/\D/g, '')) || 1;
    const weekTitle = chapterStr.toLowerCase().startsWith('week') ? chapterStr : `Week ${weekNum}`;
    meta = {
      book: first.subject || first.course || path.basename(filePath, '.json'),
      course: first.course || first.subject || "Computer Science",
      week: weekNum,
      weekTitle: weekTitle,
      topic: first.topic || first.chapter || "Course Syllabus Review",
      level: first.level || "BS Computer Science",
      createdBy: first.createdBy || first.author || "Course Instructor"
    };
  } else if (parsed && typeof parsed === "object") {
    const root = parsed.questionBank || parsed.metadata || parsed;
    const weekNum = Number(root.week || root.weekNo) || 1;
    meta = {
      book: root.book || root.subject || root.title || root.courseCode || path.basename(filePath, '.json'),
      course: root.course || root.subject || root.courseCode || "Computer Science",
      week: weekNum,
      weekTitle: root.weekTitle || root.section || (root.week ? `Week ${root.week}` : `Week ${weekNum}`),
      topic: root.topic || root.syllabusCoverage || root.title || "Course Syllabus Review",
      level: root.level || root.class || root.program || "BS Computer Science",
      createdBy: root.createdBy || root.preparedBy || root.author || root.instructor || root.lecturer || "Course Instructor"
    };

    if (Array.isArray(parsed.mcqs)) rawList = parsed.mcqs;
    else if (Array.isArray(parsed.questions)) rawList = parsed.questions;
    else if (Array.isArray(parsed.data)) rawList = parsed.data;
    else if (Array.isArray(parsed.items)) rawList = parsed.items;
    else if (Array.isArray(root.mcqs)) rawList = root.mcqs;
    else if (Array.isArray(root.questions)) rawList = root.questions;
    else if (Array.isArray(root.data)) rawList = root.data;
    else if (Array.isArray(root.items)) rawList = root.items;
    else throw new Error("JSON file must have an array under 'mcqs' or 'questions'.");
  }

  if (!rawList.length) {
    throw new Error("JSON file contains no questions.");
  }

  const validQuestions = [];
  rawList.forEach((q, idx) => {
    if (!q || typeof q !== "object") return;
    const prompt = (q.question || q.prompt || q.text || q.title || "").trim();
    if (!prompt) return;

    let rawOpts = q.options || q.choices || q.answers;
    let options = [];
    let isCorrectIdx = -1;

    if (Array.isArray(rawOpts)) {
      options = rawOpts.map(o => optText(o).trim()).filter(Boolean);
      isCorrectIdx = rawOpts.findIndex(o => o && typeof o === "object" && (o.isCorrect === true || o.correct === true));
    } else if (rawOpts && typeof rawOpts === "object") {
      options = Object.values(rawOpts).map(o => optText(o).trim()).filter(Boolean);
    }

    if (options.length < 2) return;

    let rawAns = q.answer !== undefined ? q.answer :
      (q.correctOptionIndex !== undefined ? q.correctOptionIndex :
      (q.correctIndex !== undefined ? q.correctIndex :
      (q.correct_answer !== undefined ? q.correct_answer :
      (q.correctAnswer !== undefined ? q.correctAnswer : q.correct))));

    let answerIdx = 0;
    if (isCorrectIdx >= 0 && isCorrectIdx < options.length) {
      answerIdx = isCorrectIdx;
    } else if (typeof rawAns === "number" && rawAns >= 0 && rawAns < options.length) {
      answerIdx = rawAns;
    } else if (typeof rawAns === "string") {
      const trimmed = rawAns.trim().toUpperCase();
      const letterIdx = ["A", "B", "C", "D", "E"].indexOf(trimmed);
      if (letterIdx >= 0 && letterIdx < options.length) {
        answerIdx = letterIdx;
      } else {
        const found = options.findIndex(o => o.toLowerCase() === rawAns.trim().toLowerCase());
        if (found >= 0) answerIdx = found;
      }
    }

    validQuestions.push({
      id: idx + 1,
      subject: meta.book,
      chapter: meta.topic,
      topic: meta.topic,
      difficulty: q.difficulty || "Medium",
      question: prompt,
      options: options,
      answer: answerIdx,
      explanation: (q.explanation || q.rationale || "").trim(),
      type: "single"
    });
  });

  if (!validQuestions.length) {
    throw new Error("No valid MCQs could be extracted from file.");
  }

  const slug = (meta.book + "-" + meta.weekTitle).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return {
    id: slug,
    book: meta.book,
    course: meta.course,
    week: Number(meta.week) || 1,
    weekTitle: meta.weekTitle,
    topic: meta.topic,
    level: meta.level,
    createdBy: meta.createdBy,
    icon: "📚",
    isBuiltIn: false,
    totalQuestions: validQuestions.length,
    questions: validQuestions,
    sourceFile: path.basename(filePath),
    uploadedAt: new Date()
  };
}

async function uploadFile(filePath, client) {
  console.log(`\nReading file: ${filePath}...`);
  const record = normalizeMCQFile(filePath);
  console.log(`  Parsed book: "${record.book}" (${record.weekTitle})`);
  console.log(`  Topic: "${record.topic}"`);
  console.log(`  Total Valid MCQs: ${record.totalQuestions}`);

  const db = client.db(DB_NAME);
  const subjectsColl = db.collection(COLLECTION_NAME);
  const questionsColl = db.collection("questions");

  // Upsert subject document
  console.log(`  Uploading to MongoDB [${DB_NAME}.${COLLECTION_NAME}] (ID: ${record.id})...`);
  const result = await subjectsColl.updateOne(
    { id: record.id },
    { $set: record },
    { upsert: true }
  );

  if (result.upsertedCount > 0) {
    console.log(`  ✓ Inserted new subject record in '${COLLECTION_NAME}'!`);
  } else {
    console.log(`  ✓ Updated existing subject record in '${COLLECTION_NAME}'!`);
  }

  // Also upsert individual questions into 'questions' collection for granular querying
  const questionBulk = record.questions.map(q => ({
    updateOne: {
      filter: { subjectId: record.id, questionIndex: q.id },
      update: {
        $set: {
          ...q,
          subjectId: record.id,
          book: record.book,
          weekTitle: record.weekTitle,
          course: record.course,
          updatedAt: new Date()
        }
      },
      upsert: true
    }
  }));

  if (questionBulk.length) {
    await questionsColl.bulkWrite(questionBulk);
    console.log(`  ✓ Synced ${questionBulk.length} individual questions into [${DB_NAME}.questions]!`);
  }

  return record;
}

async function main() {
  const args = process.argv.slice(2);
  let filesToUpload = [];

  if (args.includes('--all')) {
    const dataDir = path.join(__dirname, '..', 'qb', 'data');
    if (fs.existsSync(dataDir)) {
      const jsonFiles = fs.readdirSync(dataDir).filter(f => f.endsWith('.json') && !f.includes('_normalized'));
      filesToUpload = jsonFiles.map(f => path.join(dataDir, f));
    }
  } else if (args.length > 0) {
    filesToUpload = args.filter(a => !a.startsWith('--'));
  }

  if (filesToUpload.length === 0) {
    console.log("No file specified. Defaulting to all primary JSON files in qb/data/...");
    const dataDir = path.join(__dirname, '..', 'qb', 'data');
    const defaultFiles = [
      path.join(dataDir, 'theory_of_automata_week02.json'),
      path.join(dataDir, 'computer_architecture_week01.json'),
      path.join(dataDir, 'oop_adp_sem2_week03.json')
    ];
    filesToUpload = defaultFiles.filter(f => fs.existsSync(f));
  }

  console.log("==================================================");
  console.log("MCQs Question Bank — MongoDB Atlas JSON Uploader");
  console.log("==================================================");
  console.log(`Connecting to: ${MONGODB_URI.replace(/:([^:@]+)@/, ':****@')}`);
  console.log(`Database: ${DB_NAME}`);
  console.log(`Collection: ${COLLECTION_NAME}`);
  console.log(`Files to upload: ${filesToUpload.length}`);

  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    serverSelectionTimeoutMS: 10000
  });

  try {
    await client.connect();
    console.log("✓ Connected to MongoDB Atlas cluster successfully!");

    // Create helpful indexes
    const db = client.db(DB_NAME);
    await db.collection(COLLECTION_NAME).createIndex({ id: 1 }, { unique: true });
    await db.collection(COLLECTION_NAME).createIndex({ book: 1, week: 1 });
    await db.collection("questions").createIndex({ subjectId: 1, questionIndex: 1 }, { unique: true });

    let uploadedCount = 0;
    for (const file of filesToUpload) {
      if (!fs.existsSync(file)) {
        console.error(`File not found: ${file}`);
        continue;
      }
      try {
        await uploadFile(file, client);
        uploadedCount++;
      } catch (err) {
        console.error(`✗ Error uploading ${file}:`, err.message);
      }
    }

    console.log("\n==================================================");
    console.log(`Upload Complete! Successfully uploaded ${uploadedCount} subject book(s) to MongoDB Atlas.`);
    console.log("==================================================");

  } catch (err) {
    console.error("\nMongoDB Connection / Upload Error:", err.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

if (require.main === module) {
  main();
}

module.exports = { normalizeMCQFile, uploadFile };
