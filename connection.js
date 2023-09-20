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

        client.query('SELECT * FROM simpleProductInfo;', (err, res) => {
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



