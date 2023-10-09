module.exports = {
  createLocationJSON,
  createProductJSON,
  createSellerJSON
}

// Function to create a JSON object for a seller
function createSellerJSON(id, firstName, lastName, phoneNumber, description) {
  // Create a seller JSON object with provided properties
  const sellerJSON = {
    "id": id,
    "name": firstName,
    "phoneNumber": phoneNumber,
    "description": description
  }
  return sellerJSON;
}

// Function to create a JSON object for a location
function createLocationJSON(adress,  zip, city) {
    // Create a location JSON object with provided properties
  const locationJSON = {
      "adress": adress,
      "zipcode": zip,
      "city": city
  }
  return locationJSON;
}

// Function to create a JSON object for a product
function createProductJSON(item, category, title, adress, price, unit, zip, description, seller) {
    // Create a product JSON object with provided properties
  const productJSON = {
      "name": item,
      "category": category,
      "title": title,
      "locationAdress": adress,
      "price": price,
      "unit": unit,
      "locationZipCode": zip,
      "picture": null, //placeholder for image
      "description": description,
      "seller": seller
  }
  return productJSON;
}