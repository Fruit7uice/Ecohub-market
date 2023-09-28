module.exports = {
    retrieveCategories,
    retrieveSubCategories,
    retrieveAllDataFromTable,
    retrieveProductDataWithFilter,
    retrieveDataByColumnValues

}

function retrieveCategories(client) {
    return retrieveAllDataFromTable(client, 'Categories');
}

function retrieveSubCategories(client, item) {
    return retrieveDataByColumnValues(client, 'ValidProducts', 'category', item, 'product');
}

function retrieveProductDataWithFilter(client, items) {
    return retrieveDataByColumnValues(client, 'Products', 'name', items)
}

// Retrieves all rows and columns of the input table.
function retrieveAllDataFromTable(client, tableName) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        const query = `SELECT * FROM ${tableName};`;
        client.query(query, (err, res) => {
            if (err) {
                reject(`Error executing query in retrieveDataFromTable for ${tableName}`, err);
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

function retrieveDataByColumnValues(client, tableName, columnName, values) {
    return new Promise((resolve, reject) => {
        client.connect()
        .then(() => console.log('Connected to PostgreSQL database'))
        .catch(err => reject(`Error connecting to PostgreSQL: ${err}`));
            
        const placeholders = values.map((_, index) => `$${index + 1}`).join(', ');
        const query = `SELECT * FROM ${tableName} WHERE ${columnName} IN (${placeholders});`;
        
        client.query(query, values, (err, res) => {
            if (err) {
                reject(`Error executing query in retrieveDataByColumnValues for ${tableName}: ${err}`);
            } else {
                // console.log(res.rows); 
                console.log("Rows Retrieved");
                resolve(res.rows);
            }
            client.end(); // Close the connection after the query
            console.log("Client terminated!");
        });
    });
}