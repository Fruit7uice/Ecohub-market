const express = require('express')
const app = express()
const port = 3000;
const dbCon = require('./connection.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
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


app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});


app.post('/register', (req, res) => {
    const userData = req.body; // This will contain the JSON data sent from the form

    // *** TODO: INSERT INTO DATABASE ***
    console.log(userData);
    // Process userData


    // Send a response back to the client
    res.send({ message: 'Registration successful' });
    // Redirect the user to the home page
    // res.redirect('/');
});
