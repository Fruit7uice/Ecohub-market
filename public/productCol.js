// // Fetches products from the db and creates list items with their credentials
// // In the future it should be more modular and apply filter options.
// fetch('/getproducts')
//     .then(response => response.json())
//     .then(data => {
//         const productList = document.getElementById('seller-list');
//         data.forEach(product => {
//             const listItem = document.createElement('li');
//             const span1 = document.createElement('span');
//             span1.className = "product-info1";
//             const span2 = document.createElement('span');
//             span2.className = "product-info2";

//             listItem.appendChild(span1)
//             listItem.appendChild(span2)

//             //Span 1 h4 and p creation
//             const title = document.createElement('h5');
//             title.textContent = product.name;

//             const price = document.createElement('p');
//             price.textContent = product.price;
//             price.textContent += (' ' + product.unit);

//             span1.appendChild(title)
//             span1.appendChild(price)


//             //Span 2 p, img and p creation
//             const city = document.createElement('p');
//             city.textContent = product.locations;

//             const img = document.createElement('img');
//             img.src = './assets/tomat.png';

//             const timestamp = document.createElement('p');

//             timestamp.textContent = product.timeofupload.split('T')[0];
//             timestamp.id = 'timestamp'

//             span2.appendChild(city);
//             span2.appendChild(img);
//             span2.appendChild(timestamp);


//             // listItem.textContent = product.name;
//             productList.appendChild(listItem);
//         });
//     })
//     .catch(error => console.error('Error fetching data:', error));



// Fetches sellers from the db and creates list items with their name
// In the future it should be more modular and apply filter options.
fetch('/getproducts')
    .then(response => response.json())
    .then(data => {
        const productList = document.getElementById('seller-list');
        data.forEach(product => {
            const listItem = document.createElement('li');
            const span1 = document.createElement('span');
            span1.className = "product-info1";
            const span2 = document.createElement('span');
            span2.className = "product-info2";

            listItem.appendChild(span1)
            listItem.appendChild(span2)

            //Span 1 h4 and p creation
            const title = document.createElement('h5');
            title.textContent = product.title;

            const price = document.createElement('p');
            price.textContent = product.price;
            price.textContent += (' ' + product.unit);

            span1.appendChild(title)
            span1.appendChild(price)


            //Span 2 p, img and p creation
            const city = document.createElement('p');
            city.textContent = product.locationadress;

            const img = document.createElement('img');
            const productName = product.name;
            img.src = './assets/' + product.category.replace(/\s/g, '') + '.jpg';

            const timestamp = document.createElement('p');

            timestamp.textContent = product.timeofupload.split('T')[0];
            timestamp.id = 'timestamp'

            span2.appendChild(city);
            span2.appendChild(img);
            span2.appendChild(timestamp);

            // listItem.textContent = product.name;
            productList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching data:', error));