const client = require('./connect.js');


async function runQuery() {
  try {
    await client.connect(); // Establish the connection

    const res = await client.query('SELECT * FROM Sellers'); // Execute the query

    console.log(res.rows); // Log the result to the console

    await client.end(); // Close the connection
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

runQuery(); // Call the function
