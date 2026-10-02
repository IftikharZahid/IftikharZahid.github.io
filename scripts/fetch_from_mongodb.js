/**
 * MCQs Question Bank — MongoDB Atlas Fetcher
 * Inspects and exports books and MCQs stored in MongoDB Atlas.
 *
 * Usage:
 *   node scripts/fetch_from_mongodb.js
 *   node scripts/fetch_from_mongodb.js --export
 */

const fs = require('fs');
const path = require('path');
const dns = require('dns');

try {
  dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch {}

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  console.error("Error: MONGODB_URI environment variable is required. Please set it in your .env file.");
  process.exit(1);
}
const DB_NAME = process.env.MONGODB_DB || "mcqs_bank";
const COLLECTION_NAME = process.env.MONGODB_COLLECTION || "subjects";

async function main() {
  const isExport = process.argv.includes('--export');
  const client = new MongoClient(MONGODB_URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    serverSelectionTimeoutMS: 10000
  });

  try {
    console.log("Connecting to MongoDB Atlas...");
    await client.connect();
    console.log("✓ Connected to MongoDB Atlas!\n");

    const db = client.db(DB_NAME);
    const subjects = await db.collection(COLLECTION_NAME).find({}).toArray();
    const qCount = await db.collection("questions").countDocuments();

    console.log("==================================================");
    console.log(`MongoDB Database: ${DB_NAME}`);
    console.log(`Total Subject Books in '${COLLECTION_NAME}': ${subjects.length}`);
    console.log(`Total Individual Questions in 'questions': ${qCount}`);
    console.log("==================================================");

    subjects.forEach((s, idx) => {
      console.log(`\n[${idx + 1}] ID: ${s.id}`);
      console.log(`    Book: ${s.book} (${s.weekTitle})`);
      console.log(`    Topic: ${s.topic}`);
      console.log(`    MCQs Count: ${s.totalQuestions}`);
      console.log(`    Uploaded At: ${s.uploadedAt ? new Date(s.uploadedAt).toLocaleString() : 'N/A'}`);
    });

    if (isExport) {
      const outDir = path.join(__dirname, '..', 'qb', 'data', 'from_mongodb');
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

      subjects.forEach(s => {
        const outPath = path.join(outDir, `${s.id}.json`);
        fs.writeFileSync(outPath, JSON.stringify(s, null, 2));
        console.log(`\n✓ Exported: ${outPath}`);
      });
    }

  } catch (err) {
    console.error("MongoDB Error:", err.message);
  } finally {
    await client.close();
  }
}

main();
