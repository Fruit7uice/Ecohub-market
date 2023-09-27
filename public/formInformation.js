
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    sendData();
});

function sendData() {
    // Retrieve form data
    const formData = new FormData(document.getElementById('registrationForm'));
    console.log(formData);// print the form data
    // Convert form data to JSON object
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    // Send data to server using fetch API
    fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObject)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}









function createSellerJSON(id, firstName, lastName, phoneNumber, description) {
    const sellerJSON = {
        "id": id,
        "name": `${firstName } ${lastName}`,
        "phoneNumber": phoneNumber,
        "description": description
    }
    console.log(sellerJSON);
}


function createLocationJSON(adress,  zip, city) {
    const locationJSON = {
        "adress": adress,
        "zipcode": zip,
        "city": city,
    }
    console.log(locationJSON);
}

function createProductJSON(item, category, title, adress, price, unit, zip, description, seller) {
    const productJSON = {
        "name": item,
        "category": category,
        "title": title,
        "locationAdress": adress,
        "price": price,
        "unit": unit,
        "locationZipCode": zip,
        "picture": null,
        "description": description,
        "seller": seller
    }
    console.log(productJSON);
}