// Import the 'pg-promise' library and create a new instance of it.
const pgp = require('pg-promise')();

// Create a new database connection using the provided PostgreSQL connection URL.
const db = pgp('postgres://postgres:postgres@127.0.0.1:5432/postgres');

// Import the 'fs' (file system) module for reading SQL files.
const fs = require('fs');

// Define an asynchronous function to execute SQL queries from a file.
async function executeSqlFile(filePath) {
  try {
    // Read the content of the SQL file specified by 'filePath'.
    const sql = fs.readFileSync(filePath, 'utf-8');
    
    // Execute the SQL queries on the database using 'db.none'.
    await db.none(sql);

    // Log a message indicating successful execution of the SQL file.
    console.log(`Executed SQL file: ${filePath}`);
  } catch (error) {
    // Handle and log any errors that occur during SQL execution.
    console.error(`Error executing SQL file: ${filePath}`, error);
  }
}

// Define an asynchronous function to set up the test database.
async function setupTestDatabase() {
  // Specify an array of SQL file paths to be executed in order.
  const sqlFiles = [
    './Database/Tables.sql',
    './Database/chaiInserts.sql'
  ];

  // Iterate through the SQL file paths and execute each one using 'executeSqlFile'.
  for (const sqlFile of sqlFiles) {
    await executeSqlFile(sqlFile);
  }

  // Close the database connection when done.
  pgp.end();
}

// Export the 'setupTestDatabase' function to make it accessible to other modules.
module.exports = setupTestDatabase;
