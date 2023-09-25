
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
INSERT INTO Categories VALUES ('Seafoods');
INSERT INTO Categories VALUES ('Mushrooms');


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

