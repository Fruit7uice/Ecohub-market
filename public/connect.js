const { Client } = require('pg');

const client = new Client({
  user: 'postgres2',
  host: 'localhost',
  database: 'grupp11',
  password: 'postgres2',
  port: 5432,
});


module.exports = client; // Export the client for use in other files