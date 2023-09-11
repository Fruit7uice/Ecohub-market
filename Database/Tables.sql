-- This script deletes everything in your database
\set QUIET true
SET client_min_messages TO WARNING; -- Less talk please.
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO CURRENT_USER;
\set ON_ERROR_STOP ON
SET client_min_messages TO NOTICE; -- More talk
\set QUIET false



CREATE TABLE Sellers (
    id CHAR(12) CHECK(id ~ '^[0-9]+$') PRIMARY KEY,
    name TEXT NOT NULL, 
    phoneNumber INT NOT NULL CHECK(phonenumber > 0), --Only telephone numbers with 10 digits are accepted
    description TEXT NOT NULL

);


CREATE TABLE Categories (
    name TEXT PRIMARY KEY
);

CREATE TABLE Locations (
    adress TEXT PRIMARY KEY,
    coordinates POINT -- TODO make trigger for 
                      -- automatically inserting coordinates
    
);


CREATE TABLE Products(
    id INT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL REFERENCES Categories,
    locations TEXT NOT NULL REFERENCES Locations,
    picture TEXT,
    description TEXT NOT NULL,
    timeOfUpload TIMESTAMP NOT NULL,
    seller CHAR(12) NOT NULL REFERENCES Sellers

);



