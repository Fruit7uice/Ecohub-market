module.exports = {
    retrieveDataFromTable,
    retrieveProductDataByItems,
    retreiveCategories,
    retrieveSubCategories
}

function retreiveCategories(client) {
    retrieveDataFromTable(client, 'Categories');
}

function retrieveSubCategories(client, item) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

             const query = 'SELECT product FROM ValidProducts WHERE category = $1';

        client.query(query, [item], (err, res) => {
            if (err) {
                reject(`Error executing query in retrieveSubCategories for Products`, err);
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

function retrieveDataFromTable(client, tableName) {
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

// In progress
function retrieveTableDataByItems(client, table, column, items) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        const placeholders = items.map((_, index) => `$${index + 1}`).join(', ');
        const query = `SELECT * FROM ${table} WHERE ${column} IN (${placeholders});`;
        

        client.query(query, items, (err, res) => {
            if (err) {
                reject(`Error executing query in retrieveTableDataByItems in ${table}`, err);
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


function retrieveProductDataByItems(client, items) {
    return new Promise((resolve, reject) => {
        client.connect()
            .then(() => console.log('Connected to PostgreSQL database'))
            .catch(err => reject('Error connecting to PostgreSQL', err));

        const placeholders = items.map((_, index) => `$${index + 1}`).join(', ');
        const query = `SELECT * FROM Products WHERE name IN (${placeholders});`;

        client.query(query, items, (err, res) => {
            if (err) {
                reject(`Error executing query in retrieveProductDataByItems for Products`, err);
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
