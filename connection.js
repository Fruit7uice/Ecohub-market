module.exports = {
    retrieveAllSellers,
    getClient,
    retrieveProductInfo
};

const { Client } = require('pg');



// Creates a client for a local database with default attributes.
// CHANGE to become more modular, with parameters. 
function getClient(){
    const client = new Client({
        user: 'postgres',
        host: '127.0.0.1', // e.g., your_rds_endpoint.amazonaws.com
        database: 'postgres',
        password: 'postgres',
        port: 5432, // Default PostgreSQL port
    });
    return client;
}

// SQL Query to retrieve all sellers
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
            // console.log("Client terminated!")
        });
    });
}

// Creates a SQL query to retrieve Products.
// Returns JSON object of the retrieved data.
function retrieveProductInfo(client) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        client.query('SELECT * FROM columnProductInfo;', (err, res) => {
            if (err) {
                reject('Error executing query in retrieveProduct', err);
            } else {
                console.log(res.rows)
                console.log("Rows Retrieved")
                resolve(res.rows);
            }
            client.end(); // Close the connection after the query
            // console.log("Client terminated!")
        });
    });

};
