const pgp = require('pg-promise')();

const db = pgp({
  // Configure your PostgreSQL connection here
  // For example:
  host: 'localhost',
  port: 5432,
  database: 'locallygrown',
  user: 'moaahlberg',
  password: 'password',
});

module.exports = db;