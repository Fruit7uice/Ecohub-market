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

CREATE VIEW columnProductInfo AS (
    SELECT name, price, unit, locationAdress, timeOfUpload
    FROM Products
    
);


SELECT * FROM Sellers;

SELECT * FROM Locations;

SELECT * FROM Products