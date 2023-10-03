const dbCon = require('./connection.js');

module.exports = {
    retrieveCategories,
    retrieveSubCategories,
    retrieveAllDataFromTable,
    retrieveCoordinates
}

// Function to retrieve all active categories from the database. E.g ['Meats', 'Fish'...]
function retrieveCategories() {
    return retrieveDataByCriteria('Categories', '*', '', [], 'name')
    //return retrieveAllDataFromTable('Categories');
}

// Function to retrieve all active subcategories of the input argument 'category'. 
function retrieveSubCategories(category) {
    return retrieveDataByCriteria('ValidProducts', 'product', 'category', category,'product');
}

// Function to retrieve coordinates from a specific ad from the products table. 
function retrieveCoordinates(productID){
    // Get client 
    const client = dbCon.getClient();

    return new Promise((resolve, reject) => {
        // Establish a connection to the PostgreSQL database.
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        // Construct an SQL query to select all rows with the productID and where the location adress is the same as the adress from the Products table.
        const query = `SELECT Locations.coordinates FROM Products, Locations WHERE Products.id = ${productID} AND Products.locationAdress = Locations.adress AND Products.locationZipcode = Locations.zipcode`
        // Execute the SQL query to retrieve data from the table.
        client.query(query, (err, res) => {
            if (err) {
                // If an error occurs during the query execution, reject the promise with an error message.
                reject(`Error executing query in retrieveCoordinates`, err);
            } else {
                // If the query is successful, log the retrieved rows and resolve the promise with the data.
                console.log(res.rows);
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            // Close the database connection after the query is complete.
            client.end();
            console.log("Client terminated!");
        });
    });
    // Returns the longitude and latitude of the dedicated adress of the ad
}


// Function to retrieve all rows and columns from a specified table in a PostgreSQL database.
function retrieveAllDataFromTable(tableName) {
    // Get client 
    const client = dbCon.getClient();

    return new Promise((resolve, reject) => {
        // Establish a connection to the PostgreSQL database.
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        // Construct an SQL query to select all rows from the specified table.
        const query = `SELECT * FROM ${tableName};`;

        // Execute the SQL query to retrieve data from the table.
        client.query(query, (err, res) => {
            if (err) {
                // If an error occurs during the query execution, reject the promise with an error message.
                reject(`Error executing query in retrieveAllDataFromTable for ${tableName}`, err);
            } else {
                // If the query is successful, log the retrieved rows and resolve the promise with the data.
                //console.log(res.rows); // Uncomment to log all rows
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            
            // Close the database connection after the query is complete.
            client.end();
            console.log("Client terminated!");
        });
    });
}


// // Define a function to retrieve data from a PostgreSQL database based on specified column values.
// function retrieveDataByColumnValues(tableName, columnName, values) {
//     // Get client 
//     const client = dbCon.getClient();

//     return new Promise((resolve, reject) => {
//         // Establish a connection to the PostgreSQL database.
//         client.connect()
//         .then(() => console.log('Connected to PostgreSQL database'))
//         .catch(err => reject(`Error connecting to PostgreSQL: ${err}`));
            
//         // Create placeholders for the values to be used in the SQL query.
//         const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        
//         // Construct the SQL query with placeholders for the IN clause.
//         const query = `SELECT * FROM ${tableName} WHERE ${columnName} IN (${placeholders});`;
        
//         // Execute the SQL query with the specified values.
//         client.query(query, values, (err, res) => {
//             if (err) {
//                 // If an error occurs during the query execution, reject the promise with an error message.
//                 reject(`Error executing query in retrieveDataByColumnValues for ${tableName}: ${err}`);
//             } else {
//                 // If the query is successful, log the result and resolve the promise with the retrieved rows.
//                 console.log("Rows Retrieved");
//                 resolve(res.rows);
//             }
//             // Close the database connection after the query is complete.
//             client.end();
//             console.log("Client terminated!");
//         });
//     });
// }

/*A function used for retrieving data from database. The query to the database will be changed based on which parameters the function is called with.
 Parameters
 tableName: Which table to fetch data from.
 columns: which columns to be retrieved. E.g 'Berries, Bread'. If argument='' all columns will be fetched.
 whereClause: Which column to be used for the WHERE clause. E.g 'Category'. If argument='' no WHERE clause will be added to the query.
 values: A list of values that the WHERE clause should be equal to. E.g ['Berries'].
 orderBy: If you want to add a order, choose an attribute to order by. If argument='' no order will be added. Optional is to add DESC or ASC after attribute.


 returns a JSON object with all rows from the query.
*/
function retrieveDataByCriteria(tableName, columns = '*', whereClause = '', values = '', orderBy = '' ) {
    // Get a client instance from the database connection module (assumed to be named dbCon).
    const client = dbCon.getClient();

    // Return a Promise to handle asynchronous operations.
    return new Promise((resolve, reject) => {
        // Establish a connection to the PostgreSQL database.
        client.connect()
        .then(() => console.log('Connected to PostgreSQL database')) // Log a successful connection.
        .catch(err => reject(`Error connecting to PostgreSQL: ${err}`)); // Reject the Promise if there's an error.

        // Create placeholders for the values to be used in the SQL query.
        
        let placeholders
        
        if (values) {

            placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        }
            
        // Construct the SQL query with optional columns, WHERE clause, and ORDER BY clause.
        let query = `SELECT ${columns} FROM ${tableName}`;

        if (whereClause) {
            query += ` WHERE ${whereClause} IN (${placeholders})`;
        }

        if (orderBy) {
            query += ` ORDER BY ${orderBy}`;
        }

        // Execute the SQL query with the specified values.
        client.query(query, values, (err, res) => {
            if (err) {
                // If an error occurs during the query execution, reject the promise with an error message.
                reject(`Error executing query in retrieveData for ${tableName}: ${err}`);
            } else {
                // If the query is successful, log the result and resolve the promise with the retrieved rows.
                console.log("Rows Retrieved");
                //console.log(res.rows); // Uncomment to log all rows.
                resolve(res.rows);
            }
            // Close the database connection after the query is complete.
            client.end();
            console.log("Client terminated!"); // Log the termination of the client connection.
        });
    });
}


