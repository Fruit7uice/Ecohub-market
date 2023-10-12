let map; // Define a global variable to hold the map object

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 57.70544078751393, lng: 11.985471236320263 },
        zoom: 12
    });
}

// Define an array to store markers
const markerList = [];

function addInitalMarkers(location, address, name) {
    const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y) };

    const marker = new google.maps.Marker({
        position: loc,
        map: map,
    });
    markerList.push(marker);

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

// Given when a marker is clicked that markers associated info 
// will get displayed in the infoBox

function createMarker(productID, location, adress){
    console.log("Inne i createMarker");
    if(markerList.indexOf(location) == -1){
        console.log("Inne i if-satsen")
        const loc = { lat: parseFloat(location.x), lng: parseFloat(location.y)};
        console.log(loc);
        const marker = new google.maps.Marker({
            position: loc,
            map: map,
        });
        
        markerList.push(location);

        const infoWindow = new google.maps.InfoWindow({
            content: adress
        });

        marker.addListener("click", () =>{
            populateInfoBox(productID);
            infoWindow.open(map, marker);
            setTimeout(() => {
                infoWindow.close();
            }, 5000);
            
        });
    }

}

function InitMarkersFromHashMap(hashMap){
    for(let [key, value] of hashMap){
        createMarker(key, value.product.coordinates, value.product.adress)
    }
}


// Function to add a marker to the map with the desired parameters
function showMarker(productID, location, adress) {
    
    console.log("markerList: ", markerList)
    // if location already exist in markerList Then zoom onto the already existing marker/coordinates
    //else: create marker and then zoom in.
    if(markerList.indexOf(location) > -1){
        console.log("already exist")
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
     
        markerList.forEach(marker => {
            if (location.equals(marker.getPosition())) {
                infoWindow.open(map, marker);
            }
        });

        setTimeout(() => {
            infoWindow.close();

        }, 9000);
        */
    
    }
    else{
        // Create marker
        createMarker(productID, location, adress)
    }
    
}
