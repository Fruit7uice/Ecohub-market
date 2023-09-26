module.exports = {
    retrieveAllSellers,
    getClient,
    retrieveProductInfo,
    insertSeller,
    insertLocation,
    insertProduct, 
    insertData
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

};

//---------------------------------------
// User story 38

function insertData(client, table, data) {
   
    return new Promise((resolve, reject) => {
        const columns = Object.keys(data);
        const values = Object.values(data);

        const placeholders = columns.map((col, index) => `$${index + 1}`).join(', ');
        const insertQuery = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;

        client.connect() 
            .then(() => console.log('Connected to PostgreSQL database in insertData'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        client.query(insertQuery, values)
            
            .then(result => {
            console.log('Data inserted successfully');
                
            })
            .catch(error => {
            console.error('Error inserting data', error);
            });
            
         


})}

function insertSeller(client, sellerData) {
    insertData(client, 'Sellers', sellerData);
}

function insertLocation(client, locationData) {
    insertData(client, 'Locations', locationData);
}

function insertProduct(client, productData) {
    insertData(client, 'Products', productData)
}


// function insertSeller(client, sellerInfo){
//     return new Promise((resolve, reject) => {
//         client.connect() 
//            .then(() => console.log('Connected to PostgreSQL database in insertSeller'))
//            .catch(err => reject('Error connecting to PostgreSQL', err));

//            // const [sellerId, sellerName, sellerPhoneNumber, sellerDescription] = sellerInfo;
//             const sellerId = sellerInfo.id;
//             const sellerName = sellerInfo.name;
//             const sellerPhoneNumber = sellerInfo.phoneNumber;
//             const sellerDescription = sellerInfo.description;

//             const insertQuery = `
//             INSERT INTO Sellers (id, name, phoneNumber, description)
//             VALUES ($1, $2, $3, $4)
//             `;
    
//             const values = [sellerId, sellerName, sellerPhoneNumber, sellerDescription];

//             client.query(insertQuery, values)
     
//             .then(result => {
//             console.log('Data inserted successfully');
//             })
//             .catch(error => {
//             console.error('Error inserting data', error);
//             });


//                 })}

// function insertLocation(client, locationInfo){
//     return new Promise((resolve, reject) => {
//         client.connect() 
//            .then(() => console.log('Connected to PostgreSQL database in insertSeller'))
//            .catch(err => reject('Error connecting to PostgreSQL', err));

//            // const [sellerId, sellerName, sellerPhoneNumber, sellerDescription] = sellerInfo;
//             const locationAdress = locationInfo.adress;
//             const locationZipcode = locationInfo.zipcode;
//             const locationCity = locationInfo.city;
//             const locationCoordinates = locationInfo.coordinates;

//             const insertQuery = `
//             INSERT INTO Locations (adress, zipcode, city, coordinates)
//             VALUES ($1, $2, $3, $4)
//             `;
    
//             const values = [locationAdress, locationZipcode, locationCity, locationCoordinates];

//             client.query(insertQuery, values)
     
//             .then(result => {
//             console.log('Data inserted successfully');
//             })
//             .catch(error => {
//             console.error('Error inserting data', error);
//             });


//                 })}

// function insertProducts(client, productInfo){
//     return new Promise((resolve, reject) => {
//         client.connect() 
//             .then(() => console.log('Connected to PostgreSQL database in insertSeller'))
//             .catch(err => reject('Error connecting to PostgreSQL', err));

//             // const [sellerId, sellerName, sellerPhoneNumber, sellerDescription] = sellerInfo;
//             const productName = productInfo.name;
//             const productCategory = productInfo.category;
//             const productTitle = productInfo.title;
//             const productPrice = productInfo.price;
//             const productUnit = productInfo.unit;
//             const productLocation = productInfo.location;
//             const productPicture = productInfo.picture;
//             const productDescription = productInfo.description;
//             const productSeller = productInfo.seller;

//             const insertQuery = `
//             INSERT INTO Products (name, category, title, price, unit, 
//                                  location, picture, description, seller)
//             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//             `;
    
//             const values = [productName, productCategory, productTitle, 
//                             productPrice, productUnit, productLocation, productPicture, 
//                             productDescription, productSeller];

//             client.query(insertQuery, values)
        
//             .then(result => {
//             console.log('Data inserted successfully');
//             })
//             .catch(error => {
//             console.error('Error inserting data', error);
//             });


//                 })} 

