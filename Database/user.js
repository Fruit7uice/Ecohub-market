const db = require('./db');

async function createUser(name, email) {
  return await db.one(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
}

async function getUserById(id) {
  return await db.one('SELECT * FROM users WHERE id = $1', [id]);
}

module.exports = { createUser, getUserById };

async function createSeller(id, name, phonenumber, description) {
    return await db.one(
      'INSERT INTO sellers (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
  }