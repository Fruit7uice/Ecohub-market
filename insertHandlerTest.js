// Test file for testing the insertHandler.js file. Run node insertHandlerTest to test. 
// The JSON objects are hardcoded and will, if succesful be inserted into the database.

const insertHandler = require('./insertHandler.js');
const dbCon = require('./connection.js');
const coordinateGetter = require('./coordinateGetter.js');

// Example JSON file for a seller
const sellerJSON = 
    {
      "id": 123456789000,
      "name": "Goran",
      "phoneNumber": 1234567890,
      "description": "hello"
    } 

    //detta har hämtats från formulär
const locationNoCoordinatesJSON = 
    {
      "adress": 'Kuggen',
      "zipcode": 41653,
      "city": "Göteborg"
      
    } 

const locationJSON = 
    {
      "adress": "Kuggen",
      "zipcode": 41653,
      "city": "Göteborg",
      "coordinates": '57, 11'
    } 

const productJSON = 
    {
        "name" : 'Blueberries',
        "category" : 'Berries',
        "title" : 'Very blue berries',
        "price" : 3,
        "unit" : 'kg',
        "locationAdress" : 'Kuggen',
        "locationZipCode" : 41653,
        "picture" : null,
        "description" : 'blue and round',
        "seller" : 123456789000
    
     
    }

async function runTests() {
  await insertHandler.insertSeller(dbCon.getClient(), sellerJSON);
  await coordinateGetter.insertLocation(locationNoCoordinatesJSON);
  await insertHandler.insertProduct(dbCon.getClient(), productJSON);
                                      
}

runTests();











