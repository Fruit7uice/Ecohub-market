//exported functions

module.exports = {
    createCategoryAndItem,
    getCatAndItem

}
//const dbCon = require('../connection.js');
const filterQuery = require('../filterQuery.js'); // Make sure to use the correct path

// Function to create a JSON object category + item
function createCategoryAndItem(category, item) {
    // Create a category and item json
    const jsonCategoryAndItem = {
        "category": category,
        "item": item

    }
    //filterQuery.filterProductsFromJSON(dbcon.getClient(),jsonCategoryAndItem);
    console.log('hej' + JSON.stringify(jsonCategoryAndItem));
    //const hej = JSON.stringify(jsonCategoryAndItem);
    return jsonCategoryAndItem
}


async function getCatAndItem() {
    console.log('gick in i getCatAndItem');
    const cat = document.getElementById('category');
    const item = document.getElementById('item');
    //console.log('item' + item);
    //console.log('cat' + cat);
    let catValue = cat.value; //e.g. "Meats"
    let itemValue = item.value; //e.g. "Elk"

    //console.log('catvalue' + catValue);
    //console.log('itemValue' + itemValue);

    fetch('/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(createCategoryAndItem(catValue, itemValue))
        

        //filterQuery.filterProductsFromJSON(dbcon.getClient(), JSON.stringify(jsonCategoryAndItem) );
    })
        .then((response) => response.json())
        .then((data) => {
            // Handle the filtered data and update the UI here
            const productList = document.getElementById('seller-list');
            productList.innerHTML = ''; // Clear existing list
            data.forEach((product) => {
                // Create and append list items as you did in the initial data fetching code
                // ...
            });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    console.log("fetch filter");

}

/*
 fetch('/filter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createCategoryAndItem(catValue, itemValue))
    })
    .then((response) => response.json())
    .then((data) => {
        // Handle the filtered data and update the UI here
        const productList = document.getElementById('seller-list');
        productList.innerHTML = ''; // Clear existing list

        if (data.length === 0) {
            // Handle the case where no products match the filter
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = 'No products match the filter criteria.';
            productList.appendChild(noResultsMessage);
        } else {
            // Products matching the filter criteria found
            data.forEach((product) => {
                const listItem = document.createElement('li');
                // Create and append list items similar to your initial data fetching code
                // ...
                productList.appendChild(listItem);
            });
        }
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
    console.log("fetch filter");
}
*/