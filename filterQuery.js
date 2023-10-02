/*
1. get the selected category and item. (dummy json for testing).
2. match the given category and item with the products.
3. show this in some way...!
*/

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

        const { category, item } = jsonObject;
        let query;
        let queryParams = [];

        if (category && item) {
            query = 'SELECT * FROM products WHERE category = $1 AND name = $2;';
            queryParams = [category, item];
        } else if (category) {
            query = 'SELECT * FROM products WHERE category = $1;';
            queryParams = [category];
        } else {
            reject('Invalid JSON object. It should contain at least the "category" property.');
            return;
        }

        client.query(query, queryParams, (err, res) => {
            if (err) {
                reject(`Error executing query for products: ${err}`);
            } else {
                console.log(res.rows);
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            client.end(); // Close the connection after the query
            console.log("Client terminated!");
        });
    });
}


// JSON test file. Should yield all meats for sale in a list.
const jsonCategoryOnly = {
    "category": 'Seafoods'

}


//JSON test file. Should yield all cucumbers for sale in a list.
const jsonCategoryAndItem = {
    "category": 'Fruits',
    "item" : 'Bananas'
}

filterProductsFromJSON (dbCon.getClient(), jsonCategoryAndItem);
