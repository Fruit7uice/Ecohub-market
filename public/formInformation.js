function createSellerJSON() {
    const sellerJSON = {
        "id": document.getElementById("personal-nr").value,
        "name": `${document.getElementById("f-name-in").value} ${document.getElementById("l-name-in").value}`,
        "phoneNumber": document.getElementById("phone-nr").value,
        "description": document.getElementById("seller-description-in").value
    }
    console.log(sellerJSON);
}


function createLocationJSON() {
    const locationJSON = {
        "address": document.getElementById("adress").value,
        "zipcode": document.getElementById("zip-code-in").value,
        "city": document.getElementById("city-in").value,
        "coordinates": document.getElementById("locationCoordinates").value
    }
    console.log(locationJSON);
}

function createProductJSON() {
    const productJSON = {
        "name": document.getElementById("item").value,
        "category": document.getElementById("category").value,
        "title": document.getElementById("p-name-in").value,
        "locationAdress": document.getElementById("adress").value,
        "price": document.getElementById("price").value,
        "unit": document.getElementById("unit").value,
        "locationZipCode": document.getElementById("zip-code-in").value,
        "picture": null,
        "description": document.getElementById("product-description-in").value,
        "seller": document.getElementById("personal-nr").value
    }
    console.log(productJSON);
}