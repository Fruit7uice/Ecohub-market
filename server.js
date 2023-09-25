const express = require('express')
const app = express()
const port = 3000;
const dbCon = require('./connection.js');


app.use(express.static('public'));


// Only works to retrieve data when the Database is online.
// If you get the error "Error executing query", the Database may not be active.
app.get('/getproducts', (req, res) => {
    const client = dbCon.getClient();

    console.log("Inside Api Call: /getproducts")
    dbCon.retrieveProductInfo(client)
        .then(result => {
            console.log("SQL Rows Retrieved!")
            res.json(result);
            console.log("JSON Retrieved!")
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

const jsonObject = [
    {
      "id": 1,
      "name": "Goran",
      "phonenumber": "00000000",
      "description": "hello"
    } ]

dbCon.insertSeller(client, jsonObject);

//[
    // {
    //     "id": 1,
    //     "name": "John Doe",
    //     "phonenumber": "+1 (123) 456-7890"
    //   },

// app.get('/insertSellers', (req, res) => {
//     const client = dbCon.getClient();

//     console.log("Inside Api Call: /InsertSellers")
//     dbCon.insertSeller(client)
//         .then(result => {
//             console.log("SQL Inserts successful")
//             res.json(result);
//             console.log("JSON Retrieved!")
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
// });



app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
