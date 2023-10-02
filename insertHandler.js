module.exports = {
    insertSeller,
    insertLocation,
    insertProduct
}
const coordinateGetter = require('./coordinateGetter.js');

async function insertData(client, table, data) {
    // Promise is an object. Resolve and reject are callback functions that are part of the constructor of the promise object.
    return new Promise((resolve, reject) => {
        // Keys and values are the key/value pair matrix in the json-file (data).
        const keys = Object.keys(data);
        const values = Object.values(data);
            
        // Generates a list of placeholders for the info that will be inserted into the query, e.g [$1, $2, $3].
        const placeholders = keys.map((col, index) => `$${index + 1}`).join(', ');
        // Inserts the placeholders into the input table passed as an argument.
        const insertQuery = `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders})`;

        // Connects to the database through the input client.
        client.connect() 
            .then(() => console.log('Connected to PostgreSQL database in insertData'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        // queries the client database with the insertQuery, and logging "Data inserted successfully" upon success and logging detailed error information upon failure.
        client.query(insertQuery, values)
            .then(result => {
            //console.log("Data inserted successfully")
            resolve(result); 

            }) 
            .catch(error => {
            console.error('Error inserting data', error);
            });
})}

//Inserts sellersData into the 'Sellers' table using the provided PostgreSQL client
async function insertSeller(client, sellerData) {
    insertData(client, 'Sellers', sellerData);
}
// Inserts locationData into the 'Locations' table using the provided PostgreSQL client
async function insertLocation(client, locationData) {
    insertData(client, 'Locations', locationData);
}
// Inserts productData into the 'Products' table using the provided PostgreSQL client
async function insertProduct(client, productData) {
    insertData(client, 'Products', productData)
}



