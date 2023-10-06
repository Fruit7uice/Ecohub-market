TRUNCATE Table Categories, ValidProducts, Sellers, Locations, Products;

INSERT INTO Categories (name) VALUES 
('Category1'),
('Category2'),
('Category3'),
('Category4');

INSERT INTO ValidProducts (category,product) VALUES
('Category1', 'Item1'),
('Category2', 'Item2'),
('Category3', 'Item3'),
('Category4', 'Item4'),
-- Same category 
('Category4', 'Item5'); 

INSERT INTO Sellers VALUES 
('111111111111', 'Seller1', '1111111111', 'SellerDescription'),
('222222222222', 'Seller2', '2222222222', 'SellerDescription'),
('333333333333', 'Seller3', '3333333333', 'SellerDescription'),
('444444444444', 'Seller4', '4444444444', 'SellerDescription');

INSERT INTO Locations VALUES
('Adress1','11111' ,'City1', '1, 1'),
('Adress2', '22222','City2','2, 2'),
('Adress3', '33333','City3', '3, 3'),
('Adress4','44444 ','City4', '4, 4');

 -- Parenthesis (following products) does not include id-attribute since it depends on the order. Fixed with serial in table Product.
INSERT INTO Products (title, name ,category, price, unit, locationAdress, locationZipcode, picture, description, seller) VALUES 
('Product1', 'Item1', 'Category1', 1, 'pcs', 'Adress1','11111', NULL, 'ProductDescription', 111111111111),
( 'Product2', 'Item2', 'Category2', 2, 'kg', 'Adress2','22222', NULL, 'ProductDescription', 222222222222),
('Product3', 'Item3', 'Category3', 3, 'kg', 'Adress3','33333', NULL, 'ProductDescription', 333333333333),
-- Same seller selling from different locations.
('Product4', 'Item4', 'Category4', 4 ,'pcs', 'Adress4','44444', NULL, 'ProductDescription', 444444444444),
('Product5', 'Item5', 'Category4', 5,'pcs', 'Adress4','44444', NULL, 'ProductDescription', 444444444444);