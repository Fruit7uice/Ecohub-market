// The functionality of this file aims towards the goal of saving the input from the
// first form so that that information can be displayed in the third form.

// This function saves the value of all the inputs from the registration-process into the local storage.
function saveInfo() {
    var sellForm = document.getElementById("registrationForm");
    var inputs = sellForm.getElementsByTagName('input');
    for(let i = 0; i< inputs.length; i++){
        let fInput = inputs[i];
        localStorage.setItem(fInput.name, fInput.value);
        console.log(localStorage);
    } 
    localStorage.setItem('unit',  document.getElementById("unit").value)
    localStorage.setItem('productDescription', document.getElementById("productDescription").value)
    displayInput();
}

// This function displays the welcome message using the value stored in local storage.
function displayInput() {
    
    const welcomeMessage = document.getElementById('welcomeMessage');
    const sellerInfo = document.getElementById('sellerInfo');
    const productInfo = document.getElementById('productInfo');
    const terms = document.getElementById('terms');
    

    // reset inner html
    welcomeMessage.innerHTML = ""
    sellerInfo.innerHTML = ""
    productInfo.innerHTML = ""
    terms.innerHTML = ""

    // Fill above elements
    let fullname = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
    // Welcome message
    const msg = document.createElement('h3');
    msg.innerText = "Welcome " + fullname + " to EcoHub, make sure that the information below is correct before you register."
    welcomeMessage.appendChild(msg);
    
    // Seller info
    const sTitle = document.createElement("p");
    sTitle.innerText = "Personal info: ";
    
    const name = document.createElement("p");
    name.innerText = fullname;

    const personalId = document.createElement('p');
    personalId.innerText = localStorage.getItem('peronalnumber')

    const phoneNr = document.createElement('p');
    phoneNr.innerText = localStorage.getItem('phoneNumber')

    const city = document.createElement('p');
    city.innerText = localStorage.getItem('city')

    const zipCode = document.createElement('p');
    zipCode.innerText = localStorage.getItem('zipCode')
    
    const adress = document.createElement('p');
    adress.innerText = localStorage.getItem('adress')

    sellerInfo.appendChild(sTitle);
    sellerInfo.appendChild(name);
    sellerInfo.appendChild(personalId);  
    sellerInfo.appendChild(phoneNr);  
    sellerInfo.appendChild(city);  
    sellerInfo.appendChild(zipCode);
    sellerInfo.appendChild(adress);

    // Product info

    const pTitle = document.createElement('p');
    pTitle.innerHTML = "Product info: ";

    const productName = document.createElement('p');
    productName.innerText = localStorage.getItem('productName')

    const productDescription = document.createElement('p');
    productDescription.innerText = localStorage.getItem('productDescription')

    const unitPrice = document.createElement('p');
    unitPrice.innerText = localStorage.getItem('price') + ' kr / ' + localStorage.getItem('unit');

    productInfo.appendChild(pTitle);
    productInfo.appendChild(productName);
    productInfo.appendChild(productDescription);
    productInfo.appendChild(unitPrice);


    // Terms

    const infoTerms = document.createElement('p');
    infoTerms.innerText = "By registering, you agree to our [Terms and Conditions], which you can find in the info page. We respect your privacy and will never share your information with third parties."
        + " Once registered, you'll find a diverse selection of locally sourced, seasonal produce. We can't wait to have you on board!"
    
    terms.appendChild(infoTerms)
    

    

    
    
}




