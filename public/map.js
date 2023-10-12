let map; // Define a global variable to hold the map object

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.70544078751393, lng: 11.985471236320263 },
        zoom: 12
    });
}

// Define an array to store markers
const markers = [];

function addInitalMarkers(location, address, name) {
    const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y) };

    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
    markers.push(marker);

    const infoWindow = new google.maps.InfoWindow({
        content: `${address}, ${name}`
    });
    marker.addListener("click", () => {
        // Open the info window when the marker is clicked
        infoWindow.open(map, marker);
        // Automatically close the info window after 5 seconds (5000 miliseconds)
        setTimeout(() => {
            infoWindow.close();
        }, 5000);
    });
}





// Function to add a marker to the map with the desired parameters
function addMarker(location, address, name) {
    // Log the address to the console
    console.log(address);

    // Create a location object with latitude and longitude
    const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y) };

    // Log the latitude and longitude to the console
    console.log(loc.lat, loc.lng);

    //Create a new marker object
    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
    
    const offsetLat = loc.lat - 0.01; // Adjust the offset value as needed
    // Create a new position with the offset
    const centeredPosition = { lat: offsetLat, lng: loc.lng };
    // Set the center position and adjust the zoom level for zoom-in
    map.setCenter(centeredPosition);
    map.setZoom(14); // Increased zoom level for zoom-in effect
    // Add the marker to the array of markers
    markers.push(marker);

    // Create an info window with the concatenated address and name
    const infoWindow = new google.maps.InfoWindow({
        content: `${address}, ${name}`
    });

    infoWindow.open(map, marker);

    setTimeout(() => {
        infoWindow.close();
    }, 9000);

    // Add a click event listener to the marker
    marker.addListener("click", () => {
        // Open the info window when the marker is clicked
        infoWindow.open(map, marker);
        // Automatically close the info window after 5 seconds (5000 miliseconds)
        setTimeout(() => {
            infoWindow.close();
        }, 5000);
    });
}