
/*function initMap() {
    // Create a map centered at a specific location
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.705571, lng: 11.973321 },
        zoom: 12 // Set the initial zoom level
    });

    // Define an array of markers with their respective coordinates and information
    const markers = [
        {
            position: { lat: 40.7128, lng: -74.0060 }, // Example coordinates (New York City)
            info: "Marker 1 - Latitude: 40.7128, Longitude: -74.0060"
        },
        // Add more markers here as needed
    ];

    // Loop through the markers and create them on the map
    markers.forEach(markerInfo => {
        const marker = new google.maps.Marker({
            position: markerInfo.position,
            map: map,
        });

        // Create an info window to display when the marker is clicked
        const infoWindow = new google.maps.InfoWindow({
            content: markerInfo.info
        });

        // Add a click event listener to the marker
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });



}*/




/**
 * @initMap
 * Firstly the map is being centered to #center-coordinates of ones choice
 * Zooms to a certain level of zoom
 * 
 * Markers can be predefined, with the help of our database of lat & long values
 * markers are looped through and added to the map
 * 
**/


let map; // Define a global variable to hold the map object

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.70544078751393, lng: 11.985471236320263 },
        zoom: 12
    });

    // Add a right-click event listener to the map
    map.addListener('rightclick', function(event) {
        addMarker(event.latLng); // Call the addMarker function with the clicked coordinates
    });
}

function addMarker(location) {
    // Create a marker
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    // Create an info window
    const infoWindow = new google.maps.InfoWindow({
        content: `Latit kebab  ude: ${location.lat()}, Longitude: ${location.lng()}`
    });

    // Add a click event listener to the marker
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}