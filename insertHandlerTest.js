// Test file for testing the insertHandler.js file. Run node insertHandlerTest to test. 
// The JSON objects are hardcoded and will, if succesful be inserted into the database.



const insertHandler = require('./InsertHandler.js');
const dbCon = require('./connection.js');


const sellerJSON = 
    {
      "id": 123456789000,
      "name": "Goran",
      "phoneNumber": 1234567890,
      "description": "hello"
    } 

const LocationJSON = 
    {
      "adress": 'kuggen',
      "zipcode": 41653,
      "city": "Göteborg",
      "coordinates": '57, 11'
    } 

const productJSON = 
    {
        "name" : 'Bananas',
        "category" : 'Fruits',
        "title" : 'Magic bananas',
        "price" : 25,
        "unit" : 'kg',
        "locations" : 'kuggen',
        "picture" : null,
        "description" : 'hello',
        "seller" : 123456789000
     
    }


insertHandler.insertSeller(dbCon.getClient(), sellerJSON);
insertHandler.insertLocation(dbCon.getClient(), LocationJSON);
insertHandler.insertProduct(dbCon.getClient(), productJSON);