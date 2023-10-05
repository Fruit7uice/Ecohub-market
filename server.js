const express = require('express')
const app = express()
const port = 3000;
const dbCon = require('./connection.js');
const dbRetreiver = require('./retrieverHandler.js');
const bodyParser = require('body-parser');
const formFunction = require('./public/formFunctions');
const filterFunction = require ('./public/filterFunction')
const insertHandler = require('./insertHandler')
const coordinateGetter = require('./coordinateGetter')
const filterQuery = require ('./filterQuery.js')

app.use(bodyParser.json());

app.use(express.static('public'));


// Only works to retrieve data when the Database is online.
// If you get the error "Error executing query", the Database may not be active.
app.get('/getproducts', (req, res) => {

    console.log("Inside Api Call: /getproducts")
    dbRetreiver.retrieveAllDataFromTable('Products')
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


app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});

app.get('/getCategories', (req, res) => {

    dbRetreiver.retrieveCategories()
        .then(result => {
            console.log("SQL Rows Retrieved!")
            res.json(result);
            console.log(result)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});


app.post('/getSub', (req, res) => {
    // console.log("4) INSIDE GETSUB POST REQ");

    const receivedData = req.body; // category
    console.log('5) Received data:', receivedData);

    dbRetreiver.retrieveSubCategories([receivedData.name])
        .then(result => {
            // console.log("6)SERVER!!!: retrieveSubCategories result:  ", result)
            res.json(result);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/register', async (req, res) => {
    const userData = req.body; // This will contain the JSON data sent from the form

    // *** TODO: INSERT INTO DATABASE ***
    console.log(userData);

    //prints the information 
    
    // Print userData
    console.log(formFunction.createLocationJSON(userData.adress, userData.zipCode, userData.city));
    console.log(formFunction.createSellerJSON(userData.personalNumber, userData.firstName, userData.lastName, userData.phoneNumber, userData.sellerDescription));
    console.log(formFunction.createProductJSON(userData.item, userData.category, userData.productName,  userData.adress, userData.price, userData.unit, userData.zipCode, userData.productDescription, userData.personalNumber));

    await insertHandler.insertSeller(formFunction.createSellerJSON(userData.personalNumber, userData.firstName, userData.lastName, userData.phoneNumber, userData.sellerDescription));
    await coordinateGetter.insertLocation(formFunction.createLocationJSON(userData.adress, userData.zipCode, userData.city));
    await insertHandler.insertProduct(formFunction.createProductJSON(userData.item, userData.category, userData.productName,  userData.adress, userData.price, userData.unit, userData.zipCode, userData.productDescription, userData.personalNumber));


// Send a response back to the client
res.send({ message: 'Registration successful' });
// Redirect the user to the home page
// res.redirect('/');
});

app.post('/filter', async (req, res) => {
    const userData = req.body; // This will contain the JSON data sent from the form

    // *** TODO: INSERT INTO DATABASE ***
    console.log(userData);

    
    //prints the information 
    
    // Print userData
    const createdJson = filterFunction.createCategoryAndItem(userData.category, userData.item);
    console.log(createdJson);

    
    filterQuery.filterProductsFromJSON(dbCon.getClient(), createdJson);
    

// Send a response back to the client
res.send({ message: 'filtering successful' });
// Redirect the user to the home page
// res.redirect('/');
});



app.get('/getFilteredQuery', /*async???*/(req, res) =>{
    // Eran kod här för att hämta client och göra query
    // skicka tillbaka den listan som är filtrerad med res.json(result)
    
    //Ex:
    
    const client = dbCon.getClient(); // hämta client
    let categoryAndItem = filterFunction.createCategoryAndItem(userData.item, userData.category);
        filterQuery.filterProductsFromJSON(client, categoryAndItem)
            .then(result => {
                //SQL Rows (result) Retrieved!
                res.json(result); // Skicka json till client 
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    });

