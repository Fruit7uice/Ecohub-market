const listOfCategories = []; // Initialize an empty array to store categories

async function categorySelect() {
  if (listOfCategories.length == 0) // if the list is empty wait for getCategories function to be done
    await getCategories()
  
    //fetches the id of the html elements and "stores" them in variables
    var categorySel = document.getElementById("category");
    var itemSel = document.getElementById("item");
  // Loop through the list of categories and create options for each in the category dropdown
  listOfCategories.forEach(obj => {
    const option = document.createElement("option");
    option.innerHTML = obj.category.name;
    categorySel.appendChild(option);
  })

  
//when the category changes aka when you choose a category
  categorySel.onchange = function () {
    // Empty item dropdown
    itemSel.length = 1;

    //loop throw the list of categories
    for (let i = 0; i < listOfCategories.length; i++){
      if (listOfCategories[i].category.name == this.value){ // is the chosen item equal to what is on this index
        listOfCategories[i].items.forEach(item => { // add every item to the category
          const option = document.createElement("option");
          option.innerHTML = item;
          itemSel.appendChild(option);          
        })
        break;
      }
    }
  }
}

//List for the different pricings that a seller can select
var priceObject = {
  "pcs": [],
  "kg": [],
  "hg": [],
  "g": []
};


function unitSelect() {
  //fetches the id of the html element and "stores" it in variables
  var unitSel = document.getElementById("unit");

  for (var x in priceObject) {
    unitSel.options[unitSel.options.length] = new Option(x, x);
  }
}


async function getCategories() {
  await fetch('/getCategories') // needed for functioning
    .then(response => response.json())
    .then(data => {
      data.forEach(category => {
        const list = getSub(category); // fetch subcategories
        const obj = { // Create a js object which is added to the listOfCategories to use later. 
          category,
          'items' : list
        }
        listOfCategories.push(obj) // 
      });
    })
    .catch(error => console.error('Error fetching data:', error));
  console.log("get")
}

// Function to fetch subcategories based on a category
function getSub(category) {
  const items = [];
  fetch('/getSub', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  })
    .then(response => response.json())
    .then(data => { // LIST OF {CATEGORY : ITEM} OBJECTS
      data.forEach(obj => {
        items.push(obj.product)
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  return items;
}

//initialise category and unit selection
function fillCategoryObject() {
  categorySelect();
  unitSelect();
}
// loads the categories.
window.onload = function () {
  fillCategoryObject();
}


