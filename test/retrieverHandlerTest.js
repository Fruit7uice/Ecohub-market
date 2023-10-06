/*
  Test file for testing the retrieverHandler functions. Before tests are run setupDatabase will be run, that file
  runs the Table.sql file and the chaiInserts.sql
*/

// Import necessary libraries and modules
const { expect } = require('chai');  // Chai assertion library
const retrieverHandler = require('../retrieverHandler');  // Import the function from your module
const setupTestDatabase = require('./setup-testdatabase');  // Database setup function

// Before test suite, set up the database
before(async () => {
  await setupTestDatabase()
});

// Test suite for retrieverHandler
describe('retrieverHandler', () => {

  // Test case: Should retrieve the correct data from the "categories" table
  it('should retrieve the correct data from the "categories" table', async () => {
    // Define the expected result
    expectedResult = [
      { name: 'Category1' },
      { name: 'Category2' },
      { name: 'Category3' },
      { name: 'Category4' }
    ];

    // Call the function to be tested
    const result = await retrieverHandler.retrieveCategories();

    // Perform assertions using Chai
    expect(result).to.have.lengthOf(4);
    expect(result).to.deep.equal(expectedResult);
  })

// Test case: Should retrieve the correct items from the "ValidProducts" table
it('should retrieve the correct items from the "ValidProducts" table', async () => {
  const category = ['Category1'];

  // Define the expected result
  expectedResult = [
    { product: 'Item1' }
  ];

  // Call the function to be tested
  const result = await retrieverHandler.retrieveSubCategories(category);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
});

// Test case: Should retrieve the correct coordinates for a given product ID
it('should retrieve the correct coordinates for a given product ID', async () => {
  const productID = 1;

  // Define the expected result
  expectedResult = [
    { coordinates: { x: 1, y: 1 } }
  ];

  // Call the function to be tested
  result = await retrieverHandler.retrieveCoordinates(productID);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
});

//Test case: Should correctly retrieve all data from the given table
it('should correctly retrieve all data from the given table', async () => {
  const tableName = 'Sellers';

  // Define the expected result
  const expectedResult = [
    { id: '111111111111', name: 'Seller1', phonenumber: '1111111111', description: 'SellerDescription' },
    { id: '222222222222', name: 'Seller2', phonenumber: '2222222222', description: 'SellerDescription' },
    { id: '333333333333', name: 'Seller3', phonenumber: '3333333333', description: 'SellerDescription' },
    { id: '444444444444', name: 'Seller4', phonenumber: '4444444444', description: 'SellerDescription' }
  ];

  // Call the function to be tested
  const result = await retrieverHandler.retrieveAllDataFromTable(tableName);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
});

// Test case 1: Should retrieve correct data from the "Sellers" table
it('should retrieve correct data from the Sellers table', async () => {
  const tableName = 'Sellers'; // Table to retrieve data from
  const columns = 'id, name, phoneNumber, description'; // Columns to select
  const whereClause = 'id'; // WHERE clause condition
  const values = ['111111111111', '222222222222', '333333333333', '444444444444']; // Values for WHERE clause
  const orderBy = ''; // Order by criteria (empty for this test)

  // Define the expected result
  const expectedResult = [
    { id: '111111111111', name: 'Seller1', phonenumber: '1111111111', description: 'SellerDescription' },
    { id: '222222222222', name: 'Seller2', phonenumber: '2222222222', description: 'SellerDescription' },
    { id: '333333333333', name: 'Seller3', phonenumber: '3333333333', description: 'SellerDescription' },
    { id: '444444444444', name: 'Seller4', phonenumber: '4444444444', description: 'SellerDescription' }
  ];

  // Call the function to be tested
  const result = await retrieverHandler.retrieveDataByCriteria(tableName, columns, whereClause, values, orderBy);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
});

// Test case 2: Should retrieve correct data from "Products" table
it('should retrieve correct data from "Products" table', async () => {
  const tableName = 'Products'; // Table to retrieve data from
  const columns = 'title, name'; // Columns to select
  const whereClause = 'id'; // WHERE clause condition
  const values = ['1', '2', '3', '4', '5']; // Values for WHERE clause
  const orderBy = ''; // Order by criteria (empty for this test)

  // Define the expected result
  const expectedResult = [
    { title: 'Product1', name: 'Item1' },
    { title: 'Product2', name: 'Item2' },
    { title: 'Product3', name: 'Item3' },
    { title: 'Product4', name: 'Item4' },
    { title: 'Product5', name: 'Item5' }
  ];

  // Call the function to be tested
  const result = await retrieverHandler.retrieveDataByCriteria(tableName, columns, whereClause, values, orderBy);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
  expect(result).to.have.lengthOf(5); // Check the result length
  expect(result[0].price >= 0); // Check an additional property in the result
});

// Test case 3: Should retrieve correct data from "Locations" table
it('should retrieve correct data from "Locations" table', async () => {
  const tableName = 'Locations'; // Table to retrieve data from
  const columns = 'adress, zipcode, city, coordinates'; // Columns to select
  const whereClause = ''; // No WHERE clause condition for this test
  const values = []; // No values for WHERE clause
  const orderBy = ''; // Order by criteria (empty for this test)

  // Define the expected result
  const expectedResult = [
    { adress: 'Adress1', zipcode: '11111', city: 'City1', coordinates: { x: 1, y: 1 } },
    { adress: 'Adress2', zipcode: '22222', city: 'City2', coordinates: { x: 2, y: 2 } },
    { adress: 'Adress3', zipcode: '33333', city: 'City3', coordinates: { x: 3, y: 3 } },
    { adress: 'Adress4', zipcode: '44444', city: 'City4', coordinates: { x: 4, y: 4 } }
  ];

  // Call the function to be tested
  const result = await retrieverHandler.retrieveDataByCriteria(tableName);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
  expect(result).to.have.lengthOf(4); // Check the result length
});

// Test case 4: Should be able to receive ordered items from the database
it('should be able to receive ordered items from the database', async () => {
  const tableName = 'Products'; // Table to retrieve data from
  const columns = 'title, name'; // Columns to select
  const whereClause = 'id'; // WHERE clause condition
  const values = ['1', '2', '3', '4', '5']; // Values for WHERE clause
  const orderBy = 'title DESC'; // Order by criteria

  // Define the expected result
  const expectedResult = [
    { title: 'Product5', name: 'Item5' },
    { title: 'Product4', name: 'Item4' },
    { title: 'Product3', name: 'Item3' },
    { title: 'Product2', name: 'Item2' },
    { title: 'Product1', name: 'Item1' }
  ];

  // Call the function to be tested
  const result = await retrieverHandler.retrieveDataByCriteria(tableName, columns, whereClause, values, orderBy);

  // Perform assertions using Chai
  expect(result).to.deep.equal(expectedResult);
});
});
