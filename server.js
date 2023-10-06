const express = require('express')
const app = express()
const port = 3000;
const dbCon = require('./connection.js');
const dbRetreiver = require('./retrieverHandler.js');
const bodyParser = require('body-parser');
const formFunction = require('./public/formFunctions');
const insertHandler = require('./insertHandler')
const coordinateGetter = require('./coordinateGetter')


app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

// Only works to retrieve data when the Database is online.
// If you get the error "Error executing query", the Database may not be active.
app.get('/getproducts', (req, res) => {
    console.log("Inside Api Call: /getproducts")
    dbRetreiver.retrieveAllDataFromView('productAndLocation')
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





app.get('/sellaproduct', (req,res) => {
    res.sendFile(__dirname + '/public/sellForm.html');
})


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
    const receivedData = req.body; // category
    console.log('5) Received data:', receivedData);

    dbRetreiver.retrieveSubCategories([receivedData.name])
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});

app.post('/register', async (req, res) => {
    const userData = req.body; // This will contain the JSON data sent from the form


//Insert into the registration into database.

    await insertHandler.insertSeller(formFunction.createSellerJSON(userData.personalNumber, userData.firstName, userData.lastName, userData.phoneNumber, userData.sellerDescription));
    await coordinateGetter.insertLocation(formFunction.createLocationJSON(userData.adress, userData.zipCode, userData.city));
    await insertHandler.insertProduct(formFunction.createProductJSON(userData.item, userData.category, userData.productName,  userData.adress, userData.price, userData.unit, userData.zipCode, userData.productDescription, userData.personalNumber));



// Send a response back to the client
res.send({ message: 'Registration successful' });

// Redirect the user to the home page
//res.redirect('/')

});




