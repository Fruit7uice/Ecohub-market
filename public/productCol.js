
// variable to save Json items from fetch
var savedJson;

// Fetches sellers from the db and creates list items with their name
// In the future it should be more modular and apply filter options.
fetch('/getproducts')
    .then(response => response.json())
    .then(data => {
        savedJson = data;
        console.log("Json saved to variable");
        populateListOfProducts();
    })
    .catch(error => console.error('Error fetching data:', error));


function populateListOfProducts(jsonList){
    
    if(jsonList != null){
        savedJson = jsonList;
    }
    
    const productList = document.getElementById('seller-list');
        let i = 0;
        savedJson.forEach(product => {
            const listItem = document.createElement('li');
            //Span 1 h4 and p creation
            const title = document.createElement('h4');
            title.textContent = product.title;
            title.className = "product-header";

            const price = document.createElement('h3');
            price.textContent = product.price;
            price.textContent += (' ' + product.unit);
            price.className = "product-price";


            //Span 2 p, img and p creation
            const city = document.createElement('p');
            city.textContent = product.city;
            city.className = "product-city";

            const img = document.createElement('img');
            // const productName = product.name;
            img.src = './assets/' + product.category.replace(/\s/g, '') + '.jpg';
            img.className = "product-img";


            const timestamp = document.createElement('p');
            timestamp.textContent = product.timeofupload.split('T')[0];
            timestamp.id = 'timestamp';
            timestamp.className = "product-time"
            
            listItem.appendChild(title);
            listItem.appendChild(price);
            listItem.appendChild(city);
            listItem.appendChild(img);
            listItem.appendChild(timestamp);

            // listItem.textContent = product.name;

            listItem.index = i;
            listItem.addEventListener("click", () => {
                populateInfoBox(listItem.index)
            });

            i++;
            productList.appendChild(listItem);
        });
        addAllMarkersToMap();
}



//Function to dislay the marker when it gets clicked in the sellers column
function displayPin(index) {
    const item = savedJson[index];
    addMarker(item.coordinates, item.locationadress, item.name)


}


//Function to add all markers to map from beginning
function addAllMarkersToMap() {

    for (let i = 0; i < savedJson.length; i++) {
        displayPin(i)
        console.log("whole object = ", savedJson[i])
    }

}





function populateInfoBox(index){
    expand(true);
    console.log("Json for item: ", savedJson[index])
    
    displayPin(index)
    const infobox = document.getElementById("full-product");
    infobox.innerHTML = "";
   
    const item = savedJson[index];

    const titlePrice = document.createElement('div');
    const descriptionContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const locationContainer = document.createElement('div');
    const sellerContainer = document.createElement('div');

    // *** populate title / price ***
        const title = document.createElement('h1');
        title.innerHTML = item.title;

        const priceUnitType = document.createElement('h2');
        priceUnitType.innerHTML = item.name + ": " + item.price + " / " + item.unit;

        // const unit = document.createElement('h2');
        // unit.innerHTML = item.unit;

    titlePrice.appendChild(title);
    titlePrice.appendChild(priceUnitType);
    // titlePrice.appendChild(unit);
    //***********

    // *** populate description

    const descriptionHeader = document.createElement('h4');
    const description = document.createElement('p');
    descriptionHeader.innerText = "Beskrivning";
    description.innerText = item.description;
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(description)
    descriptionContainer.appendChild(document.createElement('hr'))
    //********

    // *** populate image
    const image = document.createElement('img'); 
    image.src = './assets/' + item.category.replace(/\s/g, '') + '.jpg';
    // imageContainer.innerHTML = "IMAGE";
    imageContainer.appendChild(image);

    //********
    

    // *** populate location
    const locationHeader = document.createElement('h4');
    const location = document.createElement('p');
    locationHeader.innerHTML = "Säljes vid";
    location.innerHTML = item.locationadress;
    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(location);
    //********

    // *** populate seller
    const seller = document.createElement('h4');
    const sellerDescription = document.createElement("p");
    seller.innerHTML = "Säljes av"; //Hårdkodat för nu tills vi har ett attribut för seller description i databasen.
    sellerDescription.innerHTML = "Krösus Sork är en affärsman och har en hel stab av arbetande sorkar i olika positioner.";
    // seller.innerHTML = item.seller;
    // sellerDescription.innerHTML = item.sellerDescription;
    sellerContainer.appendChild(seller);
    sellerContainer.appendChild(sellerDescription);
    //********
    
    // Creates IDs for each element of the grid
    titlePrice.id = "info-header";
    descriptionContainer.id = "info-description";
    imageContainer.id = "info-image";
    locationContainer.id = "info-location";
    sellerContainer.id = "info-seller";

    // Appends all the grid items to the grid container.
    infobox.appendChild(titlePrice); 
    infobox.appendChild(descriptionContainer);
    infobox.appendChild(imageContainer);
    infobox.appendChild(locationContainer);
    infobox.appendChild(sellerContainer);
    
    
}



