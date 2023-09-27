module.exports = {
    retrieveDataFromTable,
    retrieveProductDataByItems
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







// Example usage:
// const attributeNames = ['input_attribute1', 'input_attribute2', 'input_attribute3']; // Replace with your list of attribute names
// retrieveDataByNames(client, 'YourTableName', attributeNames).then(data => {
//     // Handle data here (data will contain rows that match any of the specified attribute names)
// }).catch(error => {
//     // Handle error here
// });


// Example usage:
// const conditions = { column1: 'value1', column2: 'value2' }; // Replace with your desired conditions
// retrieveDataWithConditions(client, 'YourTableName', conditions).then(data => {
//     // Handle data here
// }).catch(error => {
//     // Handle error here
// });


// // Create a client instance
// function retrieveAllSellers(client) {
//     return new Promise((resolve, reject) => {
//         client.connect()
//             .then(() => console.log('Connected to PostgreSQL database'))
//             .catch(err => reject('Error connecting to PostgreSQL', err));

//         client.query('SELECT * FROM Sellers;', (err, res) => {
//             if (err) {
//                 reject('Error executing query', err);
//             } else {
//                 console.log("Rows Retrieved")
//                 resolve(res.rows);
//             }
//             client.end(); // Close the connection after the query
//             console.log("Client terminated!")
//         });
//     });
// }

// function retrieveProductInfo(client) {
//     return new Promise((resolve, reject) => {
//         client.connect()
//             .then(() => console.log('Connected to PostgreSQL database'))
//             .catch(err => reject('Error connecting to PostgreSQL', err));

//         client.query('SELECT * FROM columnProductInfo;', (err, res) => {
//             if (err) {
//                 reject('Error executing query in retrieveProduct', err);
//             } else {
//                 console.log(res.rows)
//                 console.log("Rows Retrieved")
//                 resolve(res.rows);
//             }
//             client.end(); // Close the connection after the query
//             console.log("Client terminated!")
//         });
//     });

// };
// Example usage:
// const attributes = ['column1', 'column2', 'column3']; // Replace with your desired attribute names
// retrieveDataWithAttributes(client, 'YourTableName', attributes).then(data => {
    //     // Handle data here
    // }).catch(error => {
        //     // Handle error here
        // });
        