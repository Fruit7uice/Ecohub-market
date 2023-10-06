

let map; // Define a global variable to hold the map object

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.70544078751393, lng: 11.985471236320263 },
        zoom: 12
        
    });

    // TODO: On launch, add the markers on the map based on the coordinates in the database.

/* 
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
 */

}

//TODO query all the prodycts
async function createCordinateList(){
    Products.forEach(async id => {
        const currentIdCoordinates = await dbRetreiver.retrieveCoordinates(id);
        const long = currentIdCoordinates[0].coordinated.x;
        const lat = currentIdCoordinates[0].coordinated.y;
        addMarker({lat: lat, lng: long});
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


