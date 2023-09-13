
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
 
    const names = ["Tomater", "Gurkor"];
    // Define an array of markers with their respective coordinates and information
    const markers = [
        {
            position: { lat: 57.71, lng: 11.9060 }, 
            info: names[0] + " - latitude: 57.71, Longitude: 11.1060"
        },
        {
            position: { lat: 57.7128, lng: 11.8060 }, 
            info: names[1] + " - Latitude: 57.7128, Longitude: 11.0060"
        }
        // Add more markers here as needed
    ];

    // Loop through the markers and create them on the map
    markers.forEach(markerInfo => {
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
        content: `Latitude: ${location.lat()}, Longitude: ${location.lng()}`
    });

    // Add a click event listener to the marker
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}