// variable to save Json items from fetch
var savedJson;

// Hashmap (key, value) -> key = (product, marker)

var jsonHashMap;

// Fetches sellers from the db and creates list items with their name
// In the future it should be more modular and apply filter options.
fetch('/getproducts')
    .then(response => response.json())
    .then(data => {
        updateSavedJson(data);
        console.log("Json saved to variable");
        populateListOfProducts();
    })
    .catch(error => console.error('Error fetching data:', error));




function updateSavedJson(data) {
    savedJson = data;
    jsonHashMap = createHashMapFromJSONArray(savedJson);
    InitMarkersFromHashMap(jsonHashMap);
    console.log("Hashmap: ", jsonHashMap);



function createHashMapFromJSONArray(data) {
    const hashMap = new Map();
    data.forEach(item => {
        let id = item.id;
        const productTuple = {
            product: item,
            coordinates: item.coordinates
        }
        hashMap.set(id, productTuple);
    });
    return hashMap;
    // jsonHashMap.add(key:productID, valeu: (product, createMarker(product.location)));
}


function populateListOfProducts() {

    // Get a reference to the 'seller-list' element in the HTML
    const productList = document.getElementById('seller-list');
     // Clear the existing list of products in the UI
     productList.innerHTML = '';

    for (let [key, value] of jsonHashMap) {
        console.log()
        let product = value.product;
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

        listItem.addEventListener("click", () => {
            populateInfoBox(key);
            showMarker(key, value.coordinates, value.product.locationadress);
        });
        productList.appendChild(listItem);
    }
}


function populateInfoBox(productID) {
    expand(true);
    const item = jsonHashMap.get(productID).product
    console.log("Json for item: ", item)
    const infobox = document.getElementById("full-product");
    infobox.innerHTML = "";

    // const item = savedJson[index];


    const titlePrice = document.createElement('div');
    const descriptionContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const locationContainer = document.createElement('div');
    const sellerContainer = document.createElement('div');

    // *** populate title / price ***
    const title = document.createElement('h1');
    title.innerHTML = item.title;

    const priceUnitType = document.createElement('h2');
    priceUnitType.innerHTML = item.name + ": " + item.price + " kr " + " / " + item.unit;

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
    const sellerDescriptionText = item.seller_info;
    const sellerName = item.seller_name;
    seller.innerHTML = sellerName;
    sellerDescription.innerHTML = sellerDescriptionText;
    
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