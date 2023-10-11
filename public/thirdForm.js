// The functionality of this file aims towards the goal of saving the input from the
// first form so that that information can be displayed in the third form.

// This function saves the value of the input field with the id 'firstName' into the local storage.
function saveInfo() {
    // var firstName = document.getElementById('firstName').value; // Get the value of the input field
    // var lastName = document.getElementById('lastName').value; // Get the value of the input field
    // var phoneNumber = document.getElementById('phoneNumber').value; // Get the value of the input field
    // var personalNumber = document.getElementById('personalNumber').value; // Get the value of the input field
    // var adress = document.getElementById('adress').value; // Get the value of the input field
    // var city = document.getElementById('city').value; // Get the value of the input field
    // var zipCode = document.getElementById('zipCode').value; // Get the value of the input field
    // var productName = document.getElementById('productName').value; // Get the value of the input field
    // var productDescription = document.getElementById('productDescription').value; // Get the value of the input field
    // localStorage.setItem('welcome-name', name); // Store the value in local storage with key 'welcome-name'
    // displayWelcomeMessage(); // Call the function to display the welcome message

    var sellerForm = document.getElementById("form-1");
    var inputs = sellerForm.getElementsByTagName('input');
    for(let i = 0; i< inputs.length; i++){
        let fInput = inputs[i];
        localStorage.setItem(fInput.name, fInput.value);
    } 
    displayWelcomeMessage();
}

// This function displays the welcome message using the value stored in local storage.
function displayWelcomeMessage() {
    var savedFirstName = localStorage.getItem('firstName'); // Retrieve the value from local storage
    // var lastName = localStorage.getItem('lastName'); // Retrieve the value from local storage
    // var phoneNumber = localStorage.getItem('wname'); // Retrieve the value from local storage
    // var personalNumber = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    // var name = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    // var name = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    // var name = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    // var name = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    // var name = localStorage.getItem('welcome-name'); // Retrieve the value from local storage
    // if (name) { // Check if a name was retrieved
        const s = document.getElementById('savedFirstName'); // Set the content of the element with id 'welcome-name'
        s.innerText = savedFirstName;
        console.log(savedFirstName) // Print the name to the console
    
}




