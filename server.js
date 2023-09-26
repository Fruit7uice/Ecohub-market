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


const jsonObject = 
    {
      "id": 123456789000,
      "name": "Goran",
      "phoneNumber": 1234567890,
      "description": "hello"
    } 

// const client = dbCon.getClient();
// dbCon.insertSeller(client, jsonObject);

const LocationJSON = 
    {
      "adress": "kuggen",
      "zipcode": 41653,
      "city": "Göteborg",
      "coordinates": '57, 11'
    } 

// const client2 = dbCon.getClient();
// dbCon.insertLocation(client2, LocationJSON);

const productJSON = 
    {
        "name" : 'Bananas',
        "category" : 'Fruits',
        "title" : 'Magic bananas',
        "price" : 25,
        "unit" : 'kg',
        "location" : 'kuggen',
        "picture" : null,
        "decription" : 'hello',
        "seller" : 123456789000
     
    }


const client = dbCon.getClient();
//dbCon.insertProducts(client3, productJSON);

//dbCon.insertSeller(dbCon.getClient(), jsonObject);
//dbCon.insertLocation(dbCon.getClient(), LocationJSON);
//dbCon.insertProduct(dbCon.getClient(), productJSON);

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
