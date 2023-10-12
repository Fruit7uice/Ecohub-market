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

-- CREATE VIEW productAndLocationAndSeller AS(
--     SELECT * FROM
--     Products
--     JOIN
--     Locations ON locationZipcode = zipcode AND locationAdress = adress
--     JOIN Sellers ON Products.sellerID = sellerID AND sellerDescription = description
-- );

CREATE VIEW productAndLocationAndSeller AS
SELECT 
    p.*,
    l.locationZipcode,
    l.locationAddress,
    s.sellerDescription
FROM 
    Products p
JOIN 
    Locations l ON p.locationZipcode = l.zipcode AND p.locationAddress = l.address
JOIN 
    Sellers s ON p.sellerID = s.sellerID;


SELECT * FROM Sellers;

SELECT * FROM Locations;

SELECT * FROM Products;

SELECT * FROM productAndLocation;