-- This script deletes everything in your database
\set QUIET true
SET client_min_messages TO WARNING; -- Less talk please.
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO CURRENT_USER;
\set ON_ERROR_STOP ON
SET client_min_messages TO NOTICE; -- More talk
\set QUIET false

/*  
A seller sells products. The id is the unique personal number of the seller. 
A seller also has a name, a phone number and an optional description.

*/  
CREATE TABLE Sellers ( 
    id CHAR(12) CHECK(id ~ '^[0-9]+$') PRIMARY KEY,
    name TEXT NOT NULL, 
    phoneNumber VARCHAR(20) CHECK (phoneNumber ~ '^[0-9]+$'), -- Prevents negative numbers -- 
                                                     -- TODO change to char to prevent the 0 from 
                                                     -- disappering at the beginning.
    description TEXT NOT NULL

);

/*  
Contains the different types of allowed categories a product can belong to.
*/  

CREATE TABLE Categories ( 
    name TEXT PRIMARY KEY
    CHECK (name in ('Meats', 'Vegetables', 'Fruits', 'Dairy', 'Berries', 'Bread', 
                    'Root vegetables', 'Pastries' ))
);

/*  
A location is the adress and coordinates of where a product is sold. When
a seller creates a new product, the location of that product should be added 
this table.

Possible problem: If a seller adds a product on a location that is already in 
the database.
*/  
CREATE TABLE Locations (
    adress TEXT PRIMARY KEY,
    coordinates POINT -- TODO make trigger for 
                      -- automatically inserting coordinates
    
);
/*
 A product is an advertisement that a seller is selling.
 The different parts a product consists of (id, name, category, location, picture, 
 optional description, seller and time of upload)
 */
CREATE TABLE Products(
    id INT PRIMARY KEY, --TODO automatically increase by 1 with Triggers.
    name TEXT NOT NULL CHECK (name not in ('cocaine')),
    category TEXT NOT NULL REFERENCES Categories,
    locations TEXT NOT NULL REFERENCES Locations,
    picture TEXT, -- TODO be able to add picture
    description TEXT NOT NULL,
    seller CHAR(12) NOT NULL REFERENCES Sellers,
    timeOfUpload TIMESTAMP NOT NULL --Timestamp is in format: YYYY-MM-DD HH24:MI:SS


);



