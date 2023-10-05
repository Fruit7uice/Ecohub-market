// // Test file for testing the insertHandler.js file. Run node insertHandlerTest to test. 
// // The JSON objects are hardcoded and will, if succesful be inserted into the database.

// const insertHandler = require('./insertHandler.js');
// const coordinateGetter = require('./coordinateGetter.js');

// // Example JSON file for a seller
// const sellerJSON = 
//     {
//       "id": 123456789000,
//       "name": "Goran",
//       "phoneNumber": 1234567890,
//       "description": "hello"
//     } 

//     //detta har hämtats från formulär
// const locationNoCoordinatesJSON = 
//     {
//       "adress": 'Kuggen',
//       "zipcode": 41653,
//       "city": "Göteborg"
      
//     } 

// const locationJSON = 
//     {
//       "adress": "Kuggen",
//       "zipcode": 41653,
//       "city": "Göteborg",
//       "coordinates": '57, 11'
//     } 

// const productJSON = 
//     {
//         "name" : 'Blueberries',
//         "category" : 'Berries',
//         "title" : 'Very blue berries',
//         "price" : 3,
//         "unit" : 'kg',
//         "locationAdress" : 'Kuggen',
//         "locationZipCode" : 41653,
//         "picture" : null,
//         "description" : 'blue and round',
//         "seller" : 123456789000
    
     
//     }

// async function runTests() {
//   await insertHandler.insertSeller(sellerJSON);
//   await coordinateGetter.insertLocation(locationNoCoordinatesJSON);
//   await insertHandler.insertProduct(productJSON);
                                      
// }

// runTests();

const chai = require('chai');
const { insertSeller, insertLocation, insertProduct } = require('./insertHandler'); // Replace 'yourModule' with the actual module name.
const retrieverHandler = require('./retrieverHandler');
const dbCon = require('./connection.js');
const dbSetup = require('./dbSetup');

const { expect } = chai;

describe('Database Insert Functions', () => {

  before(async () => {
    // Create a test client before running the tests.
    await dbSetup();
  });

  after(async () => {
   
  });

  it('should insert seller data into the Sellers table', async () => {
    const sellerJSON = 
    {
      "id": 111111111111,
      "name": "Seller1",
      "phonenumber": 1111111111,
      "description": "SellerDescription"
    } 
    await insertSeller(sellerJSON);

    const expectedResult = [{
      "id": '111111111111',
      "name": "Seller1",
      "phonenumber": '1111111111',
      "description": "SellerDescription"
    } ]

    const result = await retrieverHandler.retrieveAllDataFromTable('Sellers');

    console.log(result);
    expect(result).to.have.lengthOf(1);
    expect(result).to.deep.equal(expectedResult);
    // Add more assertions as needed.
  });

//   it('should insert location data into the Locations table', async () => {
//     const locationData = { /* Your test data here */ };
//     const result = await insertLocation(locationData);
//     expect(result).to.be.an('object');
//     // Add more assertions as needed.
//   });

//   it('should insert product data into the Products table', async () => {
//     const productData = { /* Your test data here */ };
//     const result = await insertProduct(productData);
//     expect(result).to.be.an('object');
//     // Add more assertions as needed.
//   });
});










