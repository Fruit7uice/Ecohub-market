  const retriever = require('../retrieverHandler')
  const dbCon = require('../connection')
  
  
  var categoryObject = {
    "Meats": retriever.retrieveSubCategories(dbCon.getClient(), ['Meats']),
    "Bread": retriever.retrieveSubCategories(dbCon.getClient(), ['Bread']),
    "Vegetables": retriever.retrieveSubCategories(dbCon.getClient(), ['Vegetables']),
    "Fruits": retriever.retrieveSubCategories(dbCon.getClient(), ['FruitsMeats']),
    "Dairy": retriever.retrieveSubCategories(dbCon.getClient(), ['Dairy']),
    "Berries": retriever.retrieveSubCategories(dbCon.getClient(), ['Berries']),
    "Pastries": retriever.retrieveSubCategories(dbCon.getClient(), ['Pastries']),
    "Root Vegetables": retriever.retrieveSubCategories(dbCon.getClient(), ['Root Vegetables']),
    "Seafoods": retriever.retrieveSubCategories(dbCon.getClient(), ['Seafoods']),
    "Mushrooms": retriever.retrieveSubCategories(dbCon.getClient(), ['Mushrooms'])
    
  };
  
  function categorySelect() {
    //fetches the id of the html elements and "stores" them in variables
    var categorySel = document.getElementById("category"); 
    var itemSel = document.getElementById("item");
    
    //for each element in the categoryObject add options to the category drop down
    for (var x in categoryObject) {
      categorySel.options[categorySel.options.length] = new Option(x, x);
    }
  
    categorySel.onchange = function() {
      // Empty item dropdown
      itemSel.length = 1;
      
      // Display correct values
      var selectedCategory = categoryObject[this.value]; // get the selected category
      for (var i = 0; i < selectedCategory.length; i++) {
        itemSel.options[itemSel.options.length] = new Option(selectedCategory[i], selectedCategory[i]); // Add options to the item dropdown based on the selected category
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

    for ( var x in priceObject ){
      unitSel.options[unitSel.options.length] = new Option(x,x);
    }    
  }



  window.onload = function (){
    categorySelect()
    unitSelect()



  }





  
  