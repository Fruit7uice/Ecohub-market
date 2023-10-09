
-- TEST #1: Insert valid values into Sellers,Locations and Products. 
-- EXPECTED OUTCOME: Pass

INSERT INTO Sellers VALUES 
('199912013243', 'Moa',     '0725452671', 'Hi, I like to grow vegetables in my garden'),
('199811200000', 'Alex',    '0739936668', 'Hi, my balcony is overflowing with chillis at the moment'),
('200008060101', 'Josefin', '0707744757', 'Im an avid grower of vegetables, and sometimes I fish as well'),
('199402234323', 'Elias',   '0705938902', 'I love early mornings baking with ingredients from my greenhouse'),
('199000000000', 'Petter',  '0700000000',  'I got a farm, I sell what is left over and also bread sometimes.'),
('200001123188', 'Alva',    '0723431526', 'I am selling what is left over from the hunting.'),
('200011074155', 'Johannes', '0724346578', 'I love talking long walks in the forest looking for all kinds of mushrooms'), 
('200204051632', 'Jeffrey', '0734142673',  'My garden is covered in appletrees, I collect all fruits from the ground to guarantee tasty apples');


INSERT INTO Locations VALUES
('Lindholmsallén 25','41753','Göteborg', '57.709043, 11.937399'),
('Kommendörsgatan 5', '41459','Göteborg','57.698048, 11.929185'),
('Första Långgatan 12F', '41656','Göteborg', '57.69970, 11.94979'),
('Kulvertkonstens väg 11','42250','Göteborg', '57.75809, 11.95134'),
('Jordhyttegatan 25B', '41473', 'Göteborg', '57.68384, 11.90880'), 
('Majstångsgatan 12', '41472', 'Göteborg', '57.68710, 11.91559'),
('Sven Brolids Väg 3', '41473', 'Göteborg', '57.68185, 11.90985'),
('Bruksgatan 32', '41451', 'Göteborg', '57.68658, 11.91060'),
('Ostindiegatan 26', '41452', 'Göteborg', '57.68619777514909, 11.913105457257187');


 -- Parenthesis (following products) does not include id-attribute since it depends on the order. Fixed with serial in table Product.
INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller) VALUES 
('Homegrown red chillis','Habanero chillis', 'Vegetables', 10, 'pcs', 'Kulvertkonstens väg 11','42250', NULL,
'I´ve been growing chillis on my balcony during the summer, currently i´m in need of getting rid of some. 
The chillis are perfect for stews, there are some variety in spiceness.', 199811200000),

( 'Fresh fish','Salmons', 'Seafoods', 300, 'kg', 'Lindholmsallén 25','41753', NULL, 
'Freschly fished salmon', 200008060101),

('Delicious home-baked carrotcake','Carrotcake', 'Pastries', 200, 'pcs', 'Första Långgatan 12F','41656', NULL , 
'The most delicious carrotcake baked with freshly harvested carrots from my own garden', 199402234323),

('Crispy carrots','Carrots', 'Root Vegetables', 10 ,'kg', 'Första Långgatan 12F','41656', NULL, 
'I have grown the perfect carrots. Rich in flavour and gives a nice crisp when taking a bite', 200001123188),

('Cherry tomatoes from my garden', 'Tomatoes', 'Vegetables', 60, 'kg', 'Kommendörsgatan 5','41459', NULL, 
'Sweet tomatoes from my own greenhouse', 199912013243),

('Sweet blueberries', 'Blueberries', 'Berries', 60, 'kg', 'Jordhyttegatan 25B','41473', NULL, 
'Picked by hand', 199912013243),

('I have too much mushrooms', 'Chanterelle Mushrooms', 'Mushrooms', 40 ,'hg', 'Sven Brolids Väg 3','41473', NULL, 
'I have so much mushrooms my student apartment can´t take it anymore', 200011074155),

('Home baked bread', 'Sourdough Bread', 'Bread', 30 ,'pcs', 'Bruksgatan 32', '41451', NULL, 
                           'Baked af', 199000000000),

('Fresh green apples', 'Apples', 'Fruits', 20 , 'kg', 'Ostindiegatan 26', '41452', NULL, 
'Juicy apples from my garden, perfect for baking an autumn apple pie', 200204051632),

('Frozen elk meat from this last weekends hunt', 'Elk', 'Meats', 300 ,'kg', 'Majstångsgatan 12','41472', NULL, 
'Me and my boyfriend went hunting this last weekend, we got a big 20-taggare. The meat from the elk does not fit in the freezer so we 
are selling some.', 200001123188);

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

