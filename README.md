# e-commerce-backend

## Description

By using this application, users can manage their backend database and manipulate products, categories, and tags. By calling on predefined expressjs routes, users can perform CRUD commands on all three tables in the database so that they can manage their data that they sell. Sequelize allows the creation of the database and tables to be deployed in a development and production environment by simply providing the necessary environment variables in order to connect to the database. Categories can be created to keep products organized and products can only be associated to one category. Tags are created to help query the database and they are related to products through a fourth table called 'ProductTag'. 

## Tech Used
  * Javascript
  * NodeJS
  * Express JS
  * Sequelize
  * MySQL (mysql2 npm)
  * DotEnv

## Installation

Clone the repo to your local enviroment. You must have Node and MYSQL installed on your system in order for this program to work. Simply navigate in the command line to the root directory of the project and type "npm install" to install all of the projects dependencies. Next, type "node app" to start the program. Once the user defines the database and table definiations, they can seed the tables by simply running the command 'npm run seed'. This will create test data that the user can manipulate. From here, users can use a tool of their choice to perform CRUD operations by hitting the predefined enpoints. 

## Usage

Users will use this system to perform CRUD operations against the data stored in the database to manage their online e-commerce store.

Walkthrough Video: [Demonstration](https://drive.google.com/file/d/1mtT1yoLSRVHgjcZj4A9tABF4gBXTHlWw/view)

## Questions

GitHub profile [BradCassityDev](https://github.com/BradCassityDev)

## Application example as seen in Insomnia
![Working Project Screenshot](/app.PNG)
