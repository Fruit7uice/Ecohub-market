-- Tests various queries from the assignment, uncomment these as you make progress

--Queries:

--Selects all rows and columns from the Products table. Returns entire dataset stored in the Products table.

CREATE VIEW allProducts AS (
SELECT * FROM Products 
);

--Selects all rows and columns from the Sellers table. Returns entire dataset stored in Sellers table.
CREATE VIEW allSellers AS (
SELECT * FROM Sellers
);

--Selects all rows and columns from the Locations table. Returns the entire dataset stored in the Locations table.
CREATE VIEW allLocations AS (
SELECT * FROM Locations
);

-- A view of all products that belong to the category Meats.
CREATE VIEW meatProducts AS (
    SELECT * FROM Products
    WHERE (Products.Category = 'Meats' )
);

