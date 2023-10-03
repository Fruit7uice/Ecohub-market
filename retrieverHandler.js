module.exports = {
    retrieveCategories,
    retrieveSubCategories,
    retrieveAllDataFromTable,
    retrieveProductDataWithFilter,
    retrieveDataByColumnValues,
    retrieveCoordinates
}

// Function to retrieve all active categories from the database. E.g ['Meats', 'Fish'...]
function retrieveCategories(client) {
    return retrieveAllDataFromTable(client, 'Categories');
}

// Function to retrieve all active subcategories of the input argument 'category'. 
function retrieveSubCategories(client, category) {
    return retrieveDataByColumnValues(client, 'ValidProducts', 'category', category, 'product');
}

// Function to retrieve all products that have the input argument 'items' as the subcategory.
function retrieveProductDataWithFilter(client, items) {
    return retrieveDataByColumnValues(client, 'Products', 'name', items)
}


// Function to retrieve coordinates from a specific ad from the products table. 

function retrieveCoordinates(client, productID){
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
function retrieveAllDataFromTable(client, tableName) {
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
                console.log(res.rows);
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            
            // Close the database connection after the query is complete.
            client.end();
            console.log("Client terminated!");
        });
    });
}


// Define a function to retrieve data from a PostgreSQL database based on specified column values.
function retrieveDataByColumnValues(client, tableName, columnName, values) {
    return new Promise((resolve, reject) => {
        // Establish a connection to the PostgreSQL database.
        client.connect()
        .then(() => console.log('Connected to PostgreSQL database'))
        .catch(err => reject(`Error connecting to PostgreSQL: ${err}`));
            
        // Create placeholders for the values to be used in the SQL query.
        const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        
        // Construct the SQL query with placeholders for the IN clause.
        const query = `SELECT * FROM ${tableName} WHERE ${columnName} IN (${placeholders});`;
        
        // Execute the SQL query with the specified values.
        client.query(query, values, (err, res) => {
            if (err) {
                // If an error occurs during the query execution, reject the promise with an error message.
                reject(`Error executing query in retrieveDataByColumnValues for ${tableName}: ${err}`);
            } else {
                // If the query is successful, log the result and resolve the promise with the retrieved rows.
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            // Close the database connection after the query is complete.
            client.end();
            console.log("Client terminated!");
        });
    });
}
