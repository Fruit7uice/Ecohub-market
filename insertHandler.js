module.exports = {
    insertSeller,
    insertLocation,
    insertProduct
}

function insertData(client, table, data) {
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
            console.log('Data inserted successfully'); 
            }) 
            .catch(error => {
            console.error('Error inserting data', error);
            });
})}
// Inserts sellersData into the 'Sellers' table using the provided PostgreSQL client
function insertSeller(client, sellerData) {
    insertData(client, 'Sellers', sellerData);
}
// Inserts locationData into the 'Locations' table using the provided PostgreSQL client
function insertLocation(client, locationData) {
    insertData(client, 'Locations', locationData);
}
// Inserts productData into the 'Products' table using the provided PostgreSQL client
function insertProduct(client, productData) {
    insertData(client, 'Products', productData)
}


//-------OLD CODE-------------------------------------------------------------

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

