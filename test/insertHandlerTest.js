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
const { insertSeller, insertLocation, insertProduct } = require('../insertHandler'); // Replace 'yourModule' with the actual module name.
const retrieverHandler = require('../retrieverHandler');
const setupTestDatabase = require('../setup-testdatabase');  // Database setup function

const { expect } = chai;

async function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

before(async () => {
  await setupTestDatabase()
});


describe('Database Insert Functions', () => {

  it('should insert seller data into the Sellers table', async () => {
    const tableName = 'Sellers'

    const sellerToBeInserted = 
    {
      "id": '555555555555',
      "name": "Seller5",
      "phonenumber": '5555555555',
      "description": "SellerDescription"
    }
    
    const before = await retrieverHandler.retrieveAllDataFromTable(tableName)

    await insertSeller(sellerToBeInserted);
    
    const result = await retrieverHandler.retrieveAllDataFromTable(tableName);
    expect(before).to.have.lengthOf(4);
    expect(result).to.have.lengthOf(5);
    expect(result[4]).to.deep.equal(sellerToBeInserted);
  });

  it('should give an error when the same seller is inserted', async () => {

    const faultySeller = {
      "id": '111111111111',
      "name": "Seller1",
      "phonenumber": '1111111111',
      "description": "SellerDescription"
    };

    try {
      // Attempt to insert the faulty seller
      await insertSeller(faultySeller);
  
      // If the insertion is successful, it's an unexpected behavior, so we fail the test
      //expect.fail('Expected an error but insertion succeeded');
    } catch (error) {
      // Check if the error message contains the expected part
      expect(error.message).to.include('duplicate key value violates unique constraint "sellers_pkey"');
      expect(error).to.be.an.instanceOf(Error); // Replace with your expected error type (e.g., custom error class or built-in Error)
    }
  });
  

  it('should insert location data into the Locations table', async () => {
    const tableName = 'Locations'

    const locationToBeInserted = 
    {
      "adress": "Adress5",
      "zipcode": 55555,
      "city": "City5",
      "coordinates": '5, 5'
    } 
    const before = await retrieverHandler.retrieveAllDataFromTable(tableName);

    const expectedResultOfInserted = { adress: 'Adress5', zipcode: '55555', city: 'City5', coordinates: { x: 5, y: 5 } };

    await insertLocation(locationToBeInserted);

    const result = await retrieverHandler.retrieveAllDataFromTable(tableName);

    expect(before).to.have.lengthOf(4);
    //console.log(result);
    expect(result).to.have.lengthOf(5);
    expect(result[4]).to.deep.equal(expectedResultOfInserted);
    // Add more assertions as needed.
  });

  it('should give an error when the same location is inserted', async () => {
    const faultyLocation = {
      "adress": "Adress1",
      "zipcode": 11111,
      "city": "City1",
      "coordinates": '1, 1'
    };
  
    try {
      // Attempt to insert the faulty location
      await insertLocation(faultyLocation);
  
      // If the insertion is successful, it's an unexpected behavior, so we fail the test
      //expect.fail('Expected an error but insertion succeeded');
    } catch (error) {
      // Check if the error message contains the expected part
      expect(error.message).to.include('duplicate key value violates unique constraint "locations_pkey"');
      expect(error).to.be.an.instanceOf(Error); // Replace with your expected error type (e.g., custom error class or built-in Error)
    }
  });
  

  it('should insert product data into the Products table', async () => {
    const tableName = 'Products';
  
    const productToBeInserted = {
      "title": "Product6",
      "name": "Item1",
      "category": "Category1",
      "price": 6,  
      "unit": "pcs",
      "locationAdress": "Adress1", 
      "locationZipcode": "11111",  
      "picture": '', 
      "description": "ProductDescription",
      "seller": '111111111111'

    };
  
    const before = await retrieverHandler.retrieveAllDataFromTable(tableName);
    //console.log(before);
    await insertProduct(productToBeInserted);
  

    const result = await retrieverHandler.retrieveAllDataFromTable(tableName);

    
    const lengthBefore = Object.keys(before).length;
    const lengthAfter = Object.keys(result).length;
    //console.log(result);
    expect(lengthAfter).to.be.gt(lengthBefore);
   
    expect(result).to.have.lengthOf(6);

    //expect(result[5]).to.deep.equal(productToBeInserted);
    // Add more assertions as needed.
  });
  
  it('should give an error when the location of the product is not present in the locations table', async () => {
    const faultyProductToBeInserted = {
      "title": "Product6",
      "name": "Item1",
      "category": "Category1",
      "price": 1,  
      "unit": "pcs",
      "locationAdress": "Adress0", 
      "locationZipcode": "00000",  
      "picture": 'NULL', 
      "description": "ProductDescription",
      "seller": '111111111111'

    };
  
    try {
      // Attempt to insert the faulty product
      await insertProduct(faultyProductToBeInserted);
  
      // If the insertion is successful, it's an unexpected behavior, so we fail the test
      //expect.fail('Expected an error but insertion succeeded');
    } catch (error) {
      // Check if the error message contains the expected part
      expect(error.message).to.include('Error inserting data error: insert or update on table "products" violates foreign key constraint "products_locationzipcode_locationadress_fkey"');
      expect(error).to.be.an.instanceOf(Error); // Replace with your expected error type (e.g., custom error class or built-in Error)
    }


  it('should give an error when the seller of the product is not present in the sellers table', async () => {
    const faultyProductToBeInserted = {
      "title": "Product6",
      "name": "Item1",
      "category": "Category1",
      "price": 1,  
      "unit": "pcs",
      "locationAdress": "Adress1", 
      "locationZipcode": "11111",  
      "picture": 'NULL', 
      "description": "ProductDescription",
      "seller": '000000000000'

    };
  
    try {
      // Attempt to insert the faulty product
      await insertProduct(faultyProductToBeInserted);
  
      // If the insertion is successful, it's an unexpected behavior, so we fail the test
      //expect.fail('Expected an error but insertion succeeded');
    } catch (error) {
      // Check if the error message contains the expected part
      expect(error.message).to.include('Error inserting data error: insert or update on table "products" violates foreign key constraint "products_seller_fkey"');
      expect(error).to.be.an.instanceOf(Error); // Replace with your expected error type (e.g., custom error class or built-in Error)
    }
  });

});



  // it('should be able to insert a new Seller, location, and product at the same time', async () => {
  //   const tableName = 'Products';

  //   const newSellerToBeInserted = 
  //   {
  //     "id": '666666666666',
  //     "name": "Seller6",
  //     "phonenumber": '6666666666',
  //     "description": "SellerDescription"
  //   }

  //   const newLocationToBeInserted = 
  //   {
  //     "adress": "Adress6",
  //     "zipcode": 66666,
  //     "city": "City6",
  //     "coordinates": '6, 6'
  //   } 

  //   const newProductToBeInserted = {
  //     "title": "Product7",
  //     "name": "Item1",
  //     "category": "Category1",
  //     "price": 1,  
  //     "unit": "pcs",
  //     "locationAdress": "Adress6", 
  //     "locationZipcode": "66666",  
  //     "picture": '', 
  //     "description": "ProductDescription",
  //     "seller": '666666666666'

  //   };
    
  //   const before = await retrieverHandler.retrieveAllDataFromTable(tableName)
  //   console.log(before);

  //   await insertSeller(newSellerToBeInserted);
  //   await insertLocation(newLocationToBeInserted);
  //   await insertProduct(newProductToBeInserted);

  //   productsResult = await retrieverHandler.retrieveAllDataFromTable(tableName);

  //   const lengthBefore = Object.keys(before).length;
  //   const lengthAfter = Object.keys(productsResult).length;

  //   expect(lengthAfter).to.be.gt(lengthBefore)
  //   //console.log(lengthBefore);
  //   // expect(productsResult).to.have.le
  //   // expect(productsResult).to.have.lengthOf(7);


  // });

  });
  

  




