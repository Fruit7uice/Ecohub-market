let map; // Define a global variable to hold the map object


// Define an array to store markers
const markerLocations = [];

let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.70544078751393, lng: 11.985471236320263 },
        zoom: 12
    });
}



// Given when a marker is clicked that markers associated info 
// will get displayed in the infoBox

function createMarker(productID, location, adress){
    if(markerLocations.indexOf(location) == -1){
        const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y)};
        console.log(loc);
        const marker = new google.maps.Marker({
            position: loc,
            map: map,
        });
        markers.push(marker);
        markerLocations.push(location);

        const infoWindow = new google.maps.InfoWindow({
            content: adress
        });

        marker.addListener("click", () =>{
            focusMarker(productID, location, adress);
            populateInfoBox(productID);
            infoWindow.open(map, marker);
            setTimeout(() => {
                infoWindow.close();
            }, 5000);
            
        });
    }

}

function InitMarkersFromHashMap(hashMap){
    clearMarkers()
    for(let [key, value] of hashMap){
        createMarker(key, value.product.coordinates, value.product.adress)
    }
}


function clearMarkers(){
    markers.forEach(marker => {
        marker.setMap(null);
    });   
}





// Function to add a marker to the map with the desired parameters
function showMarker(productID, location, adress) {
    // if location already exist in markerLocations Then zoom onto the already existing marker/coordinates
    //else: create marker and then zoom in.
    if(markerLocations.indexOf(location) > -1){
        focusMarker(productID, location, adress);
    
    }
    else{
        // Create marker
        createMarker(productID, location, adress);
        focusMarker(productID, location, adress);
    }
    
}


function focusMarker(productID, location, adress){
    const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y) };

        const offsetLat = loc.lat - 0.01; // Adjust the offset value as needed
        // Create a new position with the offset
        const centeredPosition = { lat: offsetLat, lng: loc.lng };
        // Then zoom onto the already existing marker/coordinates
        map.setCenter(centeredPosition);
        map.setZoom(13);

        /*Om detta ska fungera s måste du leta igenom map.markers ish som matchar coordinates och hämta den markern...
        const infoWindow = new google.maps.InfoWindow({
            content: adress
        });
     
        markerLocations.forEach(marker => {
            if (location.equals(marker.getPosition())) {
                infoWindow.open(map, marker);
            }
        });

        setTimeout(() => {
            infoWindow.close();

        }, 9000);
        */
}