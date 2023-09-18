const db = require('./db');

// Dummy test by chatgbt
async function createUser(name, email) {
  return await db.one(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  );
}

// Dummy test by chatgbt
async function getUserById(id) {
  return await db.one('SELECT * FROM users WHERE id = $1', [id]);
}

async function createSeller(id, name, phoneNumber, description) {
  return await db.one(
    'INSERT INTO sellers (id, name, phoneNumber, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [id,name,phoneNumber, description]
  );
}

async function getSellerById(id) {
  return await db.one('SELECT * FROM sellers WHERE id = $1', [id]);
}

module.exports = { createUser, getUserById, createSeller, getSellerById };