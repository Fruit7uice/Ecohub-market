module.exports = {
    filterProductsFromJSON
}
// Import the database connection module
const dbCon = require('./connection.js');


// Function to filter products from the database based on a JSON input
function filterProductsFromJSON(client, jsonObject) {
    return new Promise((resolve, reject) => {
        // Establish a database connection
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject(`Error connecting to PostgreSQL: ${err}`));
        
        const { category, item } = jsonObject; // Extract properties from the JSON object
        let query; // Initialize the query string
        let queryParams = []; // Initialize an array to hold query parameters

    /*  item !='Item' means that an item is selected e.g. 'Bananas' (if category = 'Fruits') 
        and is not on the default placeholder  */
        if (category && item != 'none' ) { 
            console.log(item);
            console.log(category);
            // Build a query to filter products by both category ($1) and item ($2)
            query = 'SELECT * FROM products WHERE category = $1 AND name = $2;';
            // Set query parameters accordingly
            queryParams = [category, item];
        } else if (category) {
            // Build a query to filter products by category only (item not required)
            query = 'SELECT * FROM products WHERE category = $1;';
            queryParams = [category];
        } else {
            // Reject if the JSON object does not contain the required "category" property.
            reject('Invalid JSON object. It should contain at least the "category" property.');
            // Return to exit the function
            return;
        }

        // Execute the database query
        client.query(query, queryParams, (err, res) => {
            if (err) {
                // Reject with an error message if there's an issue with the query
                reject(`Error executing query for products: ${err}`);
            } else {
                // Log the retrieved rows and resolve with the result  
                console.log(res.rows);
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            client.end();  // Close the database connection after the query
            console.log("Client terminated!");
        });
    });
}
