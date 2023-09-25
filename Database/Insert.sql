
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
INSERT INTO Categories VALUES ('Root Vegetables');
INSERT INTO Categories VALUES ('Seafoods');
INSERT INTO Categories VALUES ('Mushrooms');


-- Inserts the 20 most common meats, vegetables, fruits and berries etc
INSERT INTO ValidProducts (category,product) VALUES
-- Meats --
    ('Meats','Chickens'),
    ('Meats','Beefs'),
    ('Meats','Porks'),
    ('Meats','Lambs'),
    ('Meats','Turkeys'),
    ('Meats','Venison'),
    ('Meats','Elk'),
    ('Meats','Wild Boar'),
    ('Meats','Rabbits'),
    ('Meats','Ducks'),
    ('Meats','Geese'),
    ('Meats','Pheasants'),
    ('Meats','Bison'),
    ('Meats','Deer'),

-- Seafoods --
    ('Seafoods','Salmons'),
    ('Seafoods','Tunas'),
    ('Seafoods','Shrimps'),
    ('Seafoods','Cods'),
    ('Seafoods','Pikes'),
    ('Seafoods','Trouts'),
    ('Seafoods','Catfishes'),
    ('Seafoods','Halibuts'),
    ('Seafoods','Mackerels'),
    ('Seafoods','Haddocks'),
    ('Seafoods','Sardines'),
    ('Seafoods','Scallops'),
    ('Seafoods','Crabs'),
    ('Seafoods','Lobsters'),
    ('Seafoods','Mussels'),
    
-- Root vegetables --
    ('Root Vegetables','Potatoes'),
    ('Root Vegetables','Carrots'),
    ('Root Vegetables','Sweet Potatoes'),
    ('Root Vegetables','Radishes'),
    ('Root Vegetables', 'Beets'),
    ('Root Vegetables', 'Turnips'),
    ('Root Vegetables', 'Parsnips'),
    ('Root Vegetables', 'Jerusalem Artichokes'),
    ('Root Vegetables', 'Chinese Water Chestnut'),

-- Vegetables
    ('Vegetables','Onions'),
    ('Vegetables','Tomatoes'),
    ('Vegetables','Cucumbers'),
    ('Vegetables','Lettuce'),
    ('Vegetables','Spinach'),
    ('Vegetables','Broccoli'),
    ('Vegetables','Cauliflower'),
    ('Vegetables','Bell Peppers'),
    ('Vegetables','Zucchinis'),
    ('Vegetables','Green Beans'),
    ('Vegetables','Peas'),
    ('Vegetables','Asparagus'),
    ('Vegetables','Eggplants'),
    ('Vegetables','Kales'),
    ('Vegetables','Celeries'),
    ('Vegetables','Brussels Sprouts'),
    ('Vegetables','Cabbages'),
    ('Vegetables','Corn'),
    ('Vegetables','Avocadoes'),
    ('Vegetables','Habanero chillis'),
    
-- Berries--
    ('Berries','Strawberries'),
    ('Berries','Blueberries'),
    ('Berries','Raspberries'),
    ('Berries','Blackberries'),

-- Fruits--
    ('Fruits','Apples'),
    ('Fruits','Bananas'),
    ('Fruits','Oranges'),
    ('Fruits','Grapes'),
    ('Berries','Cherries'),
    ('Fruits','Peaches'),
    ('Fruits','Pears'),
    ('Fruits','Pineapples'),
    ('Fruits','Mangoes'),
    ('Fruits','Kiwi'),
    ('Fruits','Lemons'),
    ('Fruits','Limes'),
    ('Fruits','Grapefruits'),
    

-- Dairy --
    ('Dairy','Quails'),
    ('Dairy', 'Milk'),
    ('Dairy', 'Cheeses'),
    ('Dairy', 'Yogurts'),
    ('Dairy', 'Butters'),
    ('Dairy', 'Creams'),
    ('Dairy', 'Ice Creams'),
    ('Dairy', 'Sour Creams'),
    ('Dairy', 'Cottage Cheeses'),
    ('Dairy', 'Cheese Spreads'),
    ('Dairy', 'Milkshakes'),
    ('Dairy', 'Eggnogs'),
    ('Dairy', 'Condensed Milks'),
    ('Dairy', 'Evaporated Milks'),
    ('Dairy', 'Whipped Creams'),

-- Pastries --
    ('Pastries', 'Croissants'),
    ('Pastries', 'Danishes'),
    ('Pastries', 'Cinnamon Buns'),
    ('Pastries', 'Puff Pastries'),
    ('Pastries', 'Éclairs'),
    ('Pastries', 'Carrotcake'),
    ('Pastries', 'Napoleons'),
    ('Pastries', 'Strudels'),
    ('Pastries', 'Apple pie'),
    ('Pastries', 'Tarts'),
    ('Pastries', 'Baklava'),
    ('Pastries', 'Cannoli'),
    ('Pastries', 'Stollen'),
    ('Pastries', 'Scones'),
    ('Pastries', 'Semlor'),
-- Breads --
    ('Bread', 'Baguettes'),
    ('Bread', 'Sourdough Bread'),
    ('Bread', 'Ciabatta'),
    ('Bread', 'Whole Wheat Bread'),
    ('Bread', 'Rye Bread'),
    ('Bread', 'White Bread'),
    ('Bread', 'Multigrain Bread'),
    ('Bread', 'Pumpernickel Bread'),
    ('Bread', 'French Bread'),
    ('Bread', 'Brioche'),
    ('Bread', 'Focaccia'),
    ('Bread', 'Naan'),
    ('Bread', 'Pita Bread'),
    ('Bread', 'Garlic Bread'),
    ('Bread', 'Bagels'),
    ('Bread', 'Raisin Bread'),
    ('Bread', 'Cornbread'),
    ('Bread', 'Flatbread'),

-- Mushrooms --
    ('Mushrooms', 'Portobello Mushrooms'),
    ('Mushrooms', 'Shiitake Mushrooms'),
    ('Mushrooms', 'Chanterelle Mushrooms'),
    ('Mushrooms', 'Oyster Mushrooms'),
    ('Mushrooms', 'Porcini Mushrooms');
   