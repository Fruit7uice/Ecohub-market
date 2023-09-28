const insertHandler = require('./insertHandler.js');
const dbCon = require('./connection.js');
module.exports = {
  insertLocation
}
// InsertLocation retrieve cordinates for the given location. Jsonobject and cordinates are sent into insertFinalJson on row 26.
async function insertLocation(locationData) {
  return new Promise(async (resolve, reject) => {
    try {
      const { Client, Status } = require('@googlemaps/google-maps-services-js');
      const client = new Client({});
      const address = `${locationData.adress}, ${locationData.zipcode}, ${locationData.city}`;
      
      const response = await client.geocode({
        params: {
          address: address,
          key: 'AIzaSyDwr8jBrc60ZcZ2iifSYupGIoGH3YB9fMo', // Replace with your Google Maps API key
        },
      });

      if (response.data.status === Status.OK) {
        const result = response.data.results[0];
        const { lat, lng } = result.geometry.location;
        const point = `${lat},${lng}`;
        
        await insertFinalJson(locationData, point);
        resolve(point);
      } else {
        console.log('Geocode was not successful:', response.data.status);
        reject(new Error('Geocode was not successful'));
      }
    } catch (error) {
      console.error('Error:', error);
      reject(error);
    }
  });
}
//insertFinalJson creates a new JsonObject with the cordinates added to the original jsonObject. Finally insertFinalJson can insert the values to the database by calling insertLocation in insertHandler
function insertFinalJson(locationData, point) {
  return new Promise((resolve, reject) => {
    const finalStreet = `${locationData.adress}`;
    const finalZipCode = `${locationData.zipcode}`;
    const finalCity = `${locationData.city}`;

    const jsonLocation = {
      "adress": finalStreet,
      "zipcode": finalZipCode,
      "city": finalCity,
      "coordinates": point
    };

    insertHandler.insertLocation(dbCon.getClient(), jsonLocation)
      .then(result => {
        resolve(result); // Resolve the promise with the result if successful
      })
      .catch(error => {
        reject(error); // Reject the promise with the error if it fails
      });
  });
}
