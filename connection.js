module.exports = {
    retrieveAllSellers,
    getClient,
    retrieveProductInfo,
    insertSeller
};

const { Client } = require('pg');



// Creates a client for a local database with default attributes.
// CHANGE to become more modular, with parameters. 
function getClient(){
    const client = new Client({
        user: 'postgres',
        host: '127.0.0.1', // e.g., your_rds_endpoint.amazonaws.com
        database: 'testdb',
        password: 'postgres',
        port: 5432, // Default PostgreSQL port
    });
    return client;
}

// Create a client instance
function retrieveAllSellers(client) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        client.query('SELECT * FROM Sellers;', (err, res) => {
            if (err) {
                reject('Error executing query', err);
            } else {
                console.log("Rows Retrieved")
                resolve(res.rows);
            }
            client.end(); // Close the connection after the query
            console.log("Client terminated!")
        });
    });
}

function retrieveProductInfo(client) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        client.query('SELECT * FROM columnProductInfo;', (err, res) => {
            if (err) {
                reject('Error executing query', err);
            } else {
                console.log("Rows Retrieved")
                resolve(res.rows);
            }
            client.end(); // Close the connection after the query
            console.log("Client terminated!")
        });
    });

}

//---------------------------------------
// User story 38


function insertSeller(client, sellerInfo){
    return new Promise((resolve, reject) => {
        client.connect() 
        .then(() => console.log('Connected to PostgreSQL database'))
        .catch(err => reject('Error connecting to PostgreSQL', err));

        try{
            const { id, sellerName, sellerPhoneNumber, sellerDescription } = sellerInfo;
            const insertQuery = `INSERT INTO Sellers VALUES (id, sellerName, sellerPhoneNumber, sellerDescription)`;
            client.query(insertQuery, (err, res));
            console.log('')
            
        }
        catch(error){
            console.error("could not retreive seller info: ", error);
        }  
        finally {

            client.end();
            console.log("Successfully inserted the seller info into the seller table")
        }   
        
    }
    
    
    )
}

/*
seller function
---------------

retrive info from JSON, save in variables
client.connect
insert info into sellerTable



location function
------------------
retrive info from JSON, save in variables
client.connect
insert info into lactionTable


product function
-----------------
retrive info from JSON, save in variables
client.connect
insert info into productTable

*/



// Function to insert seller information
// async function insertSeller(sellerInfo) {
//   try {
//     // Connect to the PostgreSQL database
//     await client.connect();

//     // Extract information from the JSON object (assuming it contains relevant fields)
//     const { sellerName, sellerEmail, sellerPhone } = sellerInfo;

//     // Define your SQL query to insert data into the sellerTable
//     const insertQuery = `
//       INSERT INTO sellerTable (name, email, phone)
//       VALUES ($1, $2, $3)
//     `;

//     // Execute the SQL query with the provided data
//     await client.query(insertQuery, [sellerName, sellerEmail, sellerPhone]);

//     console.log('Seller information inserted successfully.');
//   } catch (error) {
//     console.error('Error inserting seller information:', error);
//   } finally {
//     // Disconnect from the database
//     await client.end();
//   }
// }

// Example usage:
// const sellerInfo = {
//   sellerName: 'John Doe',
//   sellerEmail: 'john@example.com',
//   sellerPhone: '123-456-7890',
// };

// insertSeller(sellerInfo);




