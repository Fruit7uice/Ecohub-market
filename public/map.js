
let map; // Define a global variable to hold the map object

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.70544078751393, lng: 11.985471236320263 },
        zoom: 12
    });

    // TODO: On launch, add the markers on the map based on the coordinates in the database.

    // Loop through the markers and create them on the map
    markers.forEach(markerInfo => {
        marker.setMap(null);
        const marker = new google.maps.Marker({
            position: markerInfo.position,
            map: map,
        });

        // Add a click event listener to the marker
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: markerInfo.info
            });
            infoWindow.open(map, marker);
        });
    });

}


/*
// TODO query all the prodycts
async function createCordinateList(){
    Products.forEach(async id => {
        const currentIdCoordinates = await dbRetreiver.retrieveCoordinates(id);
        const long = currentIdCoordinates[0].coordinated.x;
        const lat = currentIdCoordinates[0].coordinated.y;
        addMarker({lat: lat, lng: long});
    });
}

*/

// Define an array to store markers
const markers = [];

// Function to add a marker to the map with the desired parameters
function addMarker(location, address, name) {
    // Log the address to the console
    console.log(address);

    // Create a location object with latitude and longitude
    const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y) };
    
    // Log the latitude and longitude to the console
    console.log(loc.lat, loc.lng);

    // Create a new marker object
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });

    // Calculate the offset latitude (adjust the offset value as needed)
    const offsetLat = loc.lat - 0.02; // Adjust the offset value as needed

    // Create a new position with the offset
    const centeredPosition = { lat: offsetLat, lng: loc.lng };

    // Set the center position and adjust the zoom level
    map.setCenter(centeredPosition);
    map.setZoom(13);

    // Add the marker to the array of markers
    markers.push(marker);

    // Create an info window with the concatenated address and name
    const infoWindow = new google.maps.InfoWindow({
        content: `${address}, ${name}`
    });

    // Add a click event listener to the marker
    marker.addListener("click", () => {
        // Open the info window when the marker is clicked
        infoWindow.open(map, marker);

        // Automatically close the info window after 5 seconds
        setTimeout(() => {
            infoWindow.close();
        }, 5000); // 5000 milliseconds = 5 seconds
    });
}

