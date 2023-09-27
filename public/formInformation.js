// Add an event listener to the form with the ID 'registrationForm'
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (which would refresh the page)
    event.preventDefault();
    // Call the sendData function to handle form submission
    sendData();
});

// Define the function to send form data to the server
function sendData() {
    // Retrieve form data using FormData
    const formData = new FormData(document.getElementById('registrationForm'));
    // Log the form data to the console (for debugging purposes)
    console.log(formData);

    // Convert form data to a JSON object
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    // Send data to the server using the fetch API
    fetch('/register', {
        method: 'POST', // Use the POST method
        headers: {
            'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(jsonObject) // Convert JSON object to a string and send as the request body
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => console.log(data)) // Log the response data to the console
        .catch(error => console.error('Error:', error)); // Handle errors, if any
}







