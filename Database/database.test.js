// Adds dependencies 
const db = require('./db'); 
const { createUser, getUserById, createSeller, getSellerById } = require('./insertTests');

// Jest function that groups together tests. 'User tests' describes what are being tested.
describe('User tests', () => {
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

  // Jest function that runs before every test in the describe-block.
  afterAll(async () => {
    // Clean up tables or perform any necessary teardown
    await db.none('DROP TABLE IF EXISTS users');
  });

  // The following two 'it' blocks are tests to be done in the describe block.
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


describe('Sellers', () =>{
    
    beforeAll(async () => {
        // Create tables or perform any necessary setup
        await db.none(`
        CREATE TABLE IF NOT EXISTS sellers ( 
            id CHAR(12) CHECK(id ~ '^[0-9]+$') PRIMARY KEY,
            name TEXT NOT NULL, 
            phoneNumber VARCHAR(20) CHECK (phoneNumber ~ '^[0-9]+$'), 
                                                             
            description TEXT NOT NULL
        
        )
        `);
      });

      afterAll(async () => {
        // Clean up tables or perform any necessary teardown
        await db.none('DROP TABLE IF EXISTS sellers');
      });
      
      it('should create a new seller', async () => {
        const seller = await createSeller('199912013122', 'Moa', '0725453666', 'I sell fruit');
        const fetchedSeller = await getSellerById(seller.id);
        expect(fetchedSeller.id).toBe('199912013122');
        expect(fetchedSeller.name).toBe('Moa');
      });
});

