// variable to save Json items from fetch
var savedJson;

// fetch('/productAndLocationAndSeller')
//     .then(response => response.json())
//     .then(data => {
//         productAndSellerJson = data;
//         console.log("Json saved to variable");
//         populateListOfProducts();

//     })
//     .catch(error => console.error('Error fetching data:', error));

// Fetches sellers from the db and creates list items with their name
// In the future it should be more modular and apply filter options.
fetch('/productAndLocationAndSeller')
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
            const title = document.createElement('h4');
            title.textContent = product.title;
            title.className = "product-header";

            const price = document.createElement('h3');
            price.textContent = product.price;
            price.textContent += (' ' + " kr / " + product.unit);
            price.className = "product-price";

            const city = document.createElement('p');
            city.textContent = product.city;
            city.className = "product-city";

            const img = document.createElement('img');
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
        priceUnitType.innerHTML = item.name + ": " + item.price + " kr "+ " / " + item.unit;

    titlePrice.appendChild(title);
    titlePrice.appendChild(priceUnitType);
    //***********

    // *** populate description

    const descriptionHeader = document.createElement('h4');
    const description = document.createElement('p');
    descriptionHeader.innerText = "Description";
    description.innerText = item.description;
    descriptionContainer.appendChild(descriptionHeader);
    descriptionContainer.appendChild(description)
    descriptionContainer.appendChild(document.createElement('hr'))
    //********

    // *** populate image
    const image = document.createElement('img'); 
    image.src = './assets/' + item.category.replace(/\s/g, '') + '.jpg';
    imageContainer.appendChild(image);
    //********
    

    // *** populate location
    const locationHeader = document.createElement('h4');
    const location = document.createElement('p');
    locationHeader.innerHTML = "Sells at";
    location.innerHTML = item.locationadress;
    locationContainer.appendChild(locationHeader);
    locationContainer.appendChild(location);
    //********

    // *** populate seller

    const seller = document.createElement('h4');
    const sellerDescription = document.createElement("p");
    const sellerDescriptionText = item.sellerDescription;
    seller.innerHTML = "Vendor";
    // sellerDescription.innerHTML = "Vendor description here"; // TODO: lägg in description för säljaren här
    sellerDescription.innerHTML = sellerDescriptionText; // TODO: lägg in description för säljaren här
    
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
    
    displayPin(index)
}



