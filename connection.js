module.exports = {
    getClient,
};

const { Client } = require('pg');

// Creates a client for a local database with default attributes.

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