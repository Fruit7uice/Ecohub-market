const { Pool } = require('pg');

module.exports = dbSetup;

async function dbSetup() {
  const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres', // Replace with your test database name
    password: 'postgres',   // Replace with your database password
    port: 5432,
  });

  try {
    // Run necessary database setup queries or operations here
    // For example, you might want to truncate tables, seed test data, or perform other setup tasks

    // Truncate the tables to start with a clean slate (example)
    await pool.query('TRUNCATE TABLE Products, Sellers, Locations;');

    // Insert test data (example)
    //await pool.query('INSERT INTO Sellers (id, name, phonenumber, description) VALUES ($1, $2, $3, $4);', ['111111111111', 'Seller1', '1111111111', 'SellerDescription'])


    // More setup tasks can go here

    // Close the pool when setup is complete
    await pool.end();
  } catch (error) {
    // Handle any errors that occur during setup
    console.error('Error during database setup:', error);
    await pool.end(); // Ensure the pool is closed in case of an error
    throw error; // Rethrow the error to indicate setup failure
  }
}


