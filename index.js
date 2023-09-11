function initMap() {
    // Create a map centered at a specific location
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
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
}