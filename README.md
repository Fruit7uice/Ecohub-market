# EcoHub
# Project Overview
Welcome to the locally grown produce and hunted meat application repository. This project aligns with the United Nations Sustainable Development Goals, specifically Goal 2 (End hunger, achieve food security and improved nutrition and promote sustainable agriculture), Goal 11 (Make cities and human settlements inclusive, safe, resilient and sustainable), and Goal 12 (Ensure sustainable consumption and production patterns).

## Sustainable Development Goals
### Goal 2: End Hunger and Promote Sustainable Agriculture
Our project contributes to Goal 2 by:

* Protecting Small Farmers:
  We prioritize the support and growth of small-scale farmers to enhance local food production and food security.

* Preserving Genetic Diversity in Crops:
  We are committed to preserving and promoting genetic diversity in crops to ensure long-term agricultural sustainability.

### Goal 11: Sustainable Urban Development
In line with Goal 11, our application focuses on:

* Inclusive Cities:
We aim to create an inclusive platform that connects urban and rural communities while promoting sustainable food practices.
Safety and Resilience: Our application promotes safe and resilient food supply chains within cities and settlements.

### Goal 12: Sustainable Consumption and Production
We contribute to Goal 12 by promoting:

* Sustainable Consumption: Our platform encourages users to make informed choices regarding the consumption of locally sourced and sustainable food products.
* Sustainable Production Patterns: We support sustainable farming and hunting practices, ensuring the responsible production of food.
Project Scope
In this repository, we outline the scope of our project, including:

### What We Aim to Develop: 
Our primary goal is to create a web-based application that facilitates the connection between consumers and local producers of fresh produce and hunted meat.
#### Division of the Project: 
We have organized our development process into manageable stages to ensure a systematic approach to feature implementation.
### Timeline: 
We have outlined a development schedule detailing when specific features will be implemented to maintain project progress.
### Technologies Used: 
Our application will be built using SQL, JavaScript, CSS, and HTML to ensure a robust and user-friendly experience.
Thank you for your interest in our project. We are committed to contributing to the achievement of UN Sustainable Development Goals and promoting sustainable food systems.

Note: This README file serves as a high-level overview. For detailed documentation and code implementation, please refer to the project's respective folders and documentation files.

## How to run
The project is using Node.js and Express to launch a web server which is available on localhost:3000.

### Run database (PostgreSQL):
* Enter the project path into the terminal.

* From there do:
    ``` cd Database ```

* Then using the default name run:
    ```psql -U postgres -d postgres``` (Password: ``` postgres ```)

* Then run the runTests.sql file to initiate:
    ``` \i runTests.sql ```
* Now quit the database:
  ``` \q ```

### Run webserver:
1. Open the folder that contains the server.js file in the terminal (VSC: right-click and select open in integrated terminal).
2. In the terminal window, type: "npm install" (So that all the packages from the package.json file are installed on your machine).
3. When installed, in the terminal window, type ``` node server.js ``` or ```npm start```, which will run the server.
4. In your browser, enter in the URL bar: localhost:3000. (This will display the home page, index.html)
