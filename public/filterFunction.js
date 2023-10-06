/*
Creates a JSON object with the chosen category and item.
 */

module.exports = {
    createCategoryAndItem,
    getCatAndItem

}
const filterQuery = require('../filterQuery.js'); // Make sure to use the correct path

// Function to create a JSON object category + item
function createCategoryAndItem(category, item) {
    // Create a category and item json
    const jsonCategoryAndItem = {
        "category": category,
        "item": item
    }
   
    return jsonCategoryAndItem
}

function getCatAndItem() {
    // Get references to the 'category' and 'item' input elements in the HTML document
    const cat = document.getElementById('category');
    const item = document.getElementById('item');
    // Extract the values of 'category' and 'item' from the input elements
    let catValue = cat.value; //e.g. "Meats"
    let itemValue = item.value; //e.g. "Elk"
    // Make a POST request to the '/filter' endpoint with the selected category and item as JSON data
    fetch('/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Convert the selected category and item into a JSON string and include it in the request body
        body: JSON.stringify(createCategoryAndItem(catValue, itemValue))
    })
        .then((response) => response.json())
        .then(data => {
            // Handle the filtered data and update the user interface (UI) here

            // Get a reference to the 'seller-list' element in the HTML
            const productList = document.getElementById('seller-list');
            // Clear the existing list of products in the UI
            productList.innerHTML = '';
            // Call a function to populate the list of products with the filtered data
            populateListOfProducts(data)
            
        })
        .catch((error) => {
            // Handle errors that occur during the fetch request and log an error message
            console.error('Error fetching data:', error);
        });
    // Log a message to indicate that the fetch request for filtering has been made
    console.log("fetch filter");

}
