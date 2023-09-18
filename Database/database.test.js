



const db = require('./db');
const { createUser, getUserById } = require('./user');

describe('Database Tests', () => {
  beforeAll(async () => {
    // Create tables or perform any necessary setup
    await db.none(`
      CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        name text,
        email text
      )
    `);
  });

  afterAll(async () => {
    // Clean up tables or perform any necessary teardown
    await db.none('DROP TABLE IF EXISTS users');
  });

  it('should create a new user', async () => {
    const user = await createUser('John Doe', 'john@example.com');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john@example.com');
  });

  it('should get a user by ID', async () => {
    const user = await createUser('Jane Smith', 'jane@example.com');
    const fetchedUser = await getUserById(user.id);
    expect(fetchedUser.name).toBe('Jane Smith');
    expect(fetchedUser.email).toBe('jane@example.com');
  });
});
