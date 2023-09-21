 var categoryObject = {
    "Vegetables": ["Tomatoes", "Broccoli", "Spinach", "Cucumber", "lettuce"],
    "Fruits": ["Apple", "Banana", "Orange","Grapes", "Peaches", "kiwi"],
    "Meats": ["Beef", "Chicken", "Pork","Lamb", "Turkey","Elk","Wild Boar","Rabbits","Ducks","Geese","Quails"],
    "Breads":["","",""],
    "Berries":["Strawberries", "Blueberries", "Blackberries"],
    "Dairy":["Milk","Cream","Butter"],
    "Pastries":["Cinnamonbun","Carrotcake"],
    "Mushrooms":["Chantarelle", "Portobello"],
    "Root Vegetables": ["Potatoes", "Carrots"]
  };
  
  window.onload = function() {
    var categorySel = document.getElementById("category");
    var itemSel = document.getElementById("item");
    
    for (var x in categoryObject) {
      categorySel.options[categorySel.options.length] = new Option(x, x);
    }
  
    categorySel.onchange = function() {
      // Empty item dropdown
      itemSel.length = 1;
      
      // Display correct values
      var selectedCategory = categoryObject[this.value];
      for (var i = 0; i < selectedCategory.length; i++) {
        itemSel.options[itemSel.options.length] = new Option(selectedCategory[i], selectedCategory[i]);
      }
    }
  }
  
  