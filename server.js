const express = require('express')
const app = express()
const port = 3000;
const dbCon = require('./connection.js');
const dbRetreiver = require('./retrieverHandler.js');
  
app.use(express.static('public'));


// Only works to retrieve data when the Database is online.
// If you get the error "Error executing query", the Database may not be active.
app.get('/getproducts', (req, res) => {
    const client = dbCon.getClient();

    console.log("Inside Api Call: /getproducts")
    dbRetreiver.retrieveAllDataFromTable(client, 'Products')
    // dbRetreiver.retrieveDataByColumnValues(client, 'Products', 'name', ['Tomatoes'])
    //dbRetreiver.retrieveProductDataWithFilter(client, ['Tomatoes', 'Blueberries'])
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

//dbRetreiver.retrieveSubCategories(dbCon.getClient(), ['Meats'])
//dbRetreiver.retrieveAllDataFromTable(dbCon.getClient(), 'Locations');



app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
