-- Tests various queries from the assignment, uncomment these as you make progress

--Queries:

--A view of all products.
CREATE VIEW allProducts AS (
SELECT * FROM Products 
);

-- A view of all sellers
CREATE VIEW allSellers AS (
SELECT * FROM Sellers 
); 


-- A view of all added locations.
CREATE VIEW allLocations AS (
SELECT * FROM Locations
);

-- A view of all products that belong to the category Meats.
CREATE VIEW meatProducts AS (
    SELECT * FROM Products
    WHERE (Products.Category = 'Meats' )
);

CREATE VIEW simpleProductInfo AS (
    SELECT Products.name AS product, Products.description, price, unit, locationAdress, locationZipcode, Sellers.name AS seller, 
           phoneNumber
    FROM Products, Sellers
    WHERE Products.seller = Sellers.id
);

-- Contains all info used for the product-element in the seller column. Orders by lowest price first.
CREATE VIEW columnProductInfo AS (
    SELECT name, price, unit, locationAdress, timeOfUpload, title
    FROM Products
    ORDER BY price ASC
    
);


CREATE VIEW productAndLocation AS(
    SELECT * FROM
    Products
    JOIN
    Locations ON locationZipcode = zipcode AND locationAdress = adress
);

-- Retrieves all the attrubutes from product And Location And Seller tables (By Using the productAndLocation view)
CREATE VIEW productAndLocationAndSeller AS (
    WITH RenamedSellers AS (
        SELECT s.id as seller_id, s.name as seller_name, s.description as seller_info, s.phoneNumber
        FROM Sellers s
    )
SELECT *
FROM 
    productAndLocation pl
JOIN
    RenamedSellers rs ON rs.seller_id = pl.seller
);



SELECT * FROM Sellers;

SELECT * FROM Locations;

SELECT * FROM Products;

SELECT * FROM productAndLocation;

SELECT * FROM productAndLocationAndSeller;

