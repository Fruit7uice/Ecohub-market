//exported functions

module.exports = {
   createCategoryAndItem,
   filterQuery
  
  }

  // Function to create a JSON object category + item
  function createCategoryAndItem(category, item) {
      // Create a category and item json
    const jsonCategoryAndItem = {
        "category": category,
        "item": item

    }
    return jsonCategoryAndItem;
  }


  function filterQuery() {
                                console.log('gick in i filterQuery');
                                const cat = document.getElementById('category');
                                const item = document.getElementById('item');
                                console.log('item' + item);
                                console.log('cat' + cat);
                                let catValue = cat.value; //e.g. "Meats"
                                let itemValue = item.value; //e.g. "Elk"
                                
                                console.log('catvalue' + catValue);
                                console.log('itemValue' + itemValue);

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
  