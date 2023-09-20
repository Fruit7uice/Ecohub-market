
-- Insert.sql is a file which different values are inserted into 
-- different tables from the file Tables.sql

-- Inserted values into the table Categories. The table is located in the file Tables.sql. 
-- These are the allowed categories: 
INSERT INTO Categories VALUES ('Meats');
INSERT INTO Categories VALUES ('Bread');
INSERT INTO Categories VALUES ('Vegetables');
INSERT INTO Categories VALUES ('Fruits');
INSERT INTO Categories VALUES ('Dairy');
INSERT INTO Categories VALUES ('Berries');
INSERT INTO Categories VALUES ('Pastries');
INSERT INTO Categories VALUES ('Root vegetables');

-- Inserts the 20 most common meats, vegetables, fruits and berries
INSERT INTO ValidProducts (product) VALUES
-- MEATS
    ('Chickens'),
    ('Beefs'),
    ('Porks'),
    ('Lambs'),
    ('Turkeys'),
    ('Salmons'),
    ('Tunas'),
    ('Shrimps'),
    ('Cods'),
    ('Pikes'),
    ('Trouts'),
    ('Catfishes'),
    ('Halibuts'),
    ('Mackerels'),
    ('Haddocks'),
    ('Sardines'),
    ('Scallops'),
    ('Crabs'),
    ('Lobsters'),
    ('Mussels'),
    ('Venison'),
    ('Elk'),
    ('Wild Boar'),
    ('Rabbits'),
    ('Ducks'),
    ('Geese'),
    ('Pheasants'),
    ('Quails'),
    ('Bison'),
-- VEGETABLES and BERRIES
    ('Potatoes'),
    ('Carrots'),
    ('Onions'),
    ('Tomatoes'),
    ('Cucumbers'),
    ('Lettuce'),
    ('Spinach'),
    ('Broccoli'),
    ('Cauliflower'),
    ('Bell Peppers'),
    ('Zucchinis'),
    ('Green Beans'),
    ('Peas'),
    ('Asparagus'),
    ('Eggplants'),
    ('Kales'),
    ('Celeries'),
    ('Radishes'),
    ('Brussels Sprouts'),
    ('Cabbages'),
    ('Sweet Potatoes'),
    ('Corn'),
    ('Avocadoes'),
    ('Strawberries'),
    ('Blueberries'),
    ('Raspberries'),
    ('Blackberries'),
    ('Apples'),
    ('Bananas'),
    ('Oranges'),
    ('Grapes'),
    ('Cherries'),
    ('Peaches'),
    ('Pears'),
    ('Pineapples'),
    ('Mangoes'),
    ('Kiwi'),
    ('Lemons'),
    ('Limes'),
    ('Grapefruits'),
    ('Habanero chillis');







-- Inserted values into the table Sellers. The table is located in the file Tables.sql. 
INSERT INTO Sellers VALUES ('199912013243', 'Moa', '0725452671', 'Selling very fine tomatoes');
INSERT INTO Sellers VALUES ('199811200000', 'Alex', '0739936668', 'Selling hot chillis');
INSERT INTO Sellers VALUES ('200008060101', 'Josefin', '0707744757', 'Selling locally hunted älg');
INSERT INTO Sellers VALUES ('199402234323','Elias', '0705938902','Selling fine meat');

-- Inserted values into the table Locations. The table is located in the file Tables.sql.
INSERT INTO Locations VALUES('Lindholmsallén 25', '57.709043, 11.937399');
INSERT INTO Locations VALUES('Kommendörsgatan 5', '57.698048, 11.929185');
INSERT INTO Locations VALUES('Första Långgatan 12F', '57.69970, 11.94979');
INSERT INTO Locations VALUES('Kulvertkonstens väg 11', '57.75809, 11.95134');

-- Inserted values into the table Products. The table is located in the file Tables.sql.
INSERT INTO Products (name ,category, price, unit, locations, picture, description, seller, timeOfUpload) -- to be able to Insert without id-attribute since it depends on the order. Fixed with serial in table Product
VALUES ('Habanero chillis', 'Vegetables',10, 'pcs', 'Kulvertkonstens väg 11', NULL,
                             'hot chillis 10 kr a piece', 199811200000, CURRENT_TIMESTAMP );

INSERT INTO Products (name ,category, price, unit, locations, picture, description, seller, timeOfUpload)
VALUES ('Tomatoes', 'Vegetables',10,'pcs', 'Kommendörsgatan 5', NULL, 
                           'fine tomatoes 10 kr a piece', 199912013243, CURRENT_TIMESTAMP );


INSERT INTO Products (name ,category, price, unit, locations, picture, description, seller, timeOfUpload)
VALUES ( 'Pikes', 'Meats', 300, 'kg', 'Lindholmsallén 25', NULL, 
                            'Freschly grinded älgfärs', 200008060101, CURRENT_TIMESTAMP );

INSERT INTO Products (name ,category, price, unit, locations, picture, description, seller, timeOfUpload)
VALUES ('Bananas', 'Fruits', 25, 'kg', 'Första Långgatan 12F', NULL, 'Magical fruits',
                             199402234323, CURRENT_TIMESTAMP );



