// const { retrieveSubCategories } = require("../retrieverHandler");

var expanded = false;
var childVisibility;

function expandCollapseFilter() {
    const dropD = document.getElementById("filter-dd");
    var children = dropD.children;

    if (expanded) { // collapse
        // dropD.style.visibility = "hidden";
        dropD.style.display = "none"
        childVisibility = "hidden";
    }
    else { // extend
        // dropD.style.visibility = "visible";
        dropD.style.display = "flex"
        childVisibility = "visible";
    }

    // for (var i = 0; i < children.length; i++) {
    //     children[i].style.visibility = childVisibility; // Replace property and value with the desired style
    // }

    expanded = !expanded;
}


function getCaregories(){
    fetch('/getCategories')
        .then(response => response.json())
        .then(data => {
            data.forEach(category => {
                const list = getSub(category);
                // console.log(`Trying to print ${category.name} list :`, list);
                categorySub[category.name] = list;
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}


function getSub(category){
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


function fillCategoryObject(){
    getCaregories();
}


const categorySub = {};
fillCategoryObject();
console.log('Object with categories and subcategories: ', categorySub)
