const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:postgres@127.0.0.1:5432/postgres');
const fs = require('fs');
const { Pool } = require('pg');

async function executeSqlFile(filePath) {
  try {
    const sql = fs.readFileSync(filePath, 'utf-8');
    await db.none(sql);
    console.log(`Executed SQL file: ${filePath}`);
  } catch (error) {
     console.error(`Error executing SQL file: ${filePath}`, error);
  }
}

async function setupTestDatabase() {

    
  const sqlFiles = [
    'Database/Tables.sql',
    'Database/chaiInserts.sql'
  ];

  for (const sqlFile of sqlFiles) {
    await executeSqlFile(sqlFile);
  }

  pgp.end();
}

module.exports = setupTestDatabase;
