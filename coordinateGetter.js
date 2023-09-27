const insertHandler = require('./insertHandler.js');
const dbCon = require('./connection.js');
module.exports = {
  getCoordinates
}

function getCoordinates(locationData){

// Status: [OK, ZERO_RESULTS, OVER_QUERY_LIMIT, REQUEST_DENIED, INVALID_REQUEST]
const { Client, Status } = require('@googlemaps/google-maps-services-js');

// Initialize the client 
const client = new Client({});

// Retrieve address, zipcode and city from locationNoCoordinates an address to geocode
const address = `${locationData.address}, ${locationData.zipcode}, ${locationData.city}`;

//'Lindholmsallén 25, 41753, Göteborg';


// Perform geocoding
client
  // Passes a JSON object as argument into the geocode function.
  .geocode({
    params: {
      address: address,
      key: 'AIzaSyDwr8jBrc60ZcZ2iifSYupGIoGH3YB9fMo', // Our Google Maps API key
    },
  })
  .then((response) => {
    // Check if the geocoding was successful
    if (response.data.status === Status.OK) {
    // Extract the latitude and longitude from the response
      const result = response.data.results[0];
      const { lat, lng } = result.geometry.location;
      //return result.geometry.location;
    // Log the latitude and longitude to the console
      
    //const point = ( lat + ',' + lng);
   
    return { lat, lng }; 
      
    } else {
      // Handle the case where geocoding was not successful
      console.log('Geocode was not successful:', response.data.status);
    }
  })
  // Handle any errors that occur during the geocoding process
  .catch((error) => {
    console.error('Error:', error);
  });

}
//AIzaSyDwr8jBrc60ZcZ2iifSYupGIoGH3YB9fMo