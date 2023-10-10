// The functionality of this file aims towards the goal of saving the input from the
// first form so that that information can be displayed in the third form.

// This function saves the value of the input field with the id 'firstName' into the local storage.
function saveInfo() {
    var name = document.getElementById('firstName').value; // Get the value of the input field
    localStorage.setItem('welcome-name', name); // Store the value in local storage with key 'welcome-name'
    displayWelcomeMessage(); // Call the function to display the welcome message
}

// This function displays the welcome message using the value stored in local storage.
function displayWelcomeMessage() {
    var name = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    if (name) { // Check if a name was retrieved
        document.getElementById('welcome-name').textContent = name; // Set the content of the element with id 'welcome-name'
        console.log(name) // Print the name to the console
    }
}




