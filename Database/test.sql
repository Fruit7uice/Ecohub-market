
-- TEST #1: Insert valid values into Sellers,Locations and Products. 
-- EXPECTED OUTCOME: Pass

INSERT INTO Sellers VALUES ('199912013243', 'Moa', '0725452671', 'Selling very fine tomatoes');
INSERT INTO Sellers VALUES ('199811200000', 'Alex', '0739936668', 'Selling hot chillis');
INSERT INTO Sellers VALUES ('200008060101', 'Josefin', '0707744757', 'Selling locally fished pike');
INSERT INTO Sellers VALUES ('199402234323','Elias', '0705938902','Selling fine meat');

INSERT INTO Locations VALUES('Lindholmsallén 25','41753','Göteborg', '57.709043, 11.937399');
INSERT INTO Locations VALUES('Kommendörsgatan 5', '41459','Göteborg','57.698048, 11.929185');
INSERT INTO Locations VALUES('Första Långgatan 12F', '41656','Göteborg', '57.69970, 11.94979');
INSERT INTO Locations VALUES('Kulvertkonstens väg 11','42250','Göteborg', '57.75809, 11.95134');

 -- Parenthesis (following products) does not include id-attribute since it depends on the order. Fixed with serial in table Product.
INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller)
VALUES ('Hothot chillis (very spicy)','Habanero chillis', 'Vegetables',10, 'pcs', 'Kulvertkonstens väg 11','42250', NULL,
                             'hot chillis 10 kr a piece', 199811200000);

INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller)
VALUES ('Cherry tomatoes', 'Tomatoes', 'Vegetables',10,'pcs', 'Kommendörsgatan 5','41459', NULL, 
                           'fine tomatoes 10 kr a piece', 199912013243);

INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ( 'Fresh fish','Pikes', 'Seafoods', 300, 'kg', 'Lindholmsallén 25','41753', NULL, 
                            'Freschly grinded älgfärs', 200008060101, CURRENT_TIMESTAMP );

INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Fruits', 25, 'kg', 'Första Långgatan 12F','41656', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );

-- Same seller selling from different locations.
INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Very fine tomatoes','Tomatoes', 'Vegetables',10,'pcs', 'Första Långgatan 12F','41656', NULL, 
                           'fine tomatoes 10 kr a piece', 199912013243, CURRENT_TIMESTAMP );                             

---------------------------------------------------------------------------------------------------------

-- TEST #2: Insert invalid values into Sellers,Locations and Products. 
-- NOTE: uncomment one by one when testing.
-- EXPECTED OUTCOME: Fail

-- Inserting an existing seller
--INSERT INTO Sellers VALUES ('199912013243', 'Moa', '0725452671', 'Selling very fine tomatoes'); 

-- Social security number incorrect format.
--INSERT INTO Sellers VALUES ('99912013243', 'Moa', '0725452671', 'Selling very fine tomatoes');

-- Phone number wrong format.
--INSERT INTO Sellers VALUES ('199912013243', 'Moa', 'HELLO0725452671', 'Selling very fine tomatoes');

--Negative price
/*INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Fruits', -25, 'kg', 'Första Långgatan 12F','41656', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );*/
                             
--Invalid name on product
/*   INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Big elephant','Elephant', 'Fruits', 25, 'kg', 'Första Långgatan 12F', '41656', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );*/
                          
-- A category that does not exist
/*INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Ivory', 25, 'kg', 'Första Långgatan 12F', '41656', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );*/

-- Non-existing unit
/*INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Fruits', 25, 'tonnes', 'Första Långgatan 12F', '41656', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );*/

 -- Non existing location
/*INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Fruits', 25, 'kg', 'Chalmersgatan 5','43214', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );*/
                             
-- Non-existing Seller (wrong seller id)
/*INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Fruits', 25, 'kg', 'Första Långgatan 12F','41656', NULL, 'Magical fruits',
                             199402234333, CURRENT_TIMESTAMP );*/

-- Product does not match category
/*INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller, timeOfUpload)
VALUES ('Perfect yellow bananas','Bananas', 'Meats', 25, 'kg', 'Första Långgatan 12F','41656', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );*/

