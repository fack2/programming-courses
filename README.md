# programming-courses

## user Journey

- as a user I should be able to sign up / login
- as a user I will be able to search for a programming courses
- as a user I should be able to see courses details
- as a user with **role admin** can add courses
- as a user I will be able to logout

## file structure

- public

  - style.css

- src

  - database

    - queries

      - getData.js
      - postData.js

    - db_build.sql
    - db_build.js
    - db_connection.js

  - handlers

    - error.js
    - index.js

  - validation

    - login.hbs
    - signup.hbs

  - views

    - layouts
      - main.hbs
    - partials
      - header.hbs

  - app.js

  - server.js

## Database schema

![Untitled-Diagram-_4_](https://user-images.githubusercontent.com/47992412/62522333-27642800-b83a-11e9-9d37-856fda4ac7ce.png)

## Instructions :

To use our Repo without heroku database,you should:

- git clone this repo
- Put in terminal : npm install .
- create database CREATE DATABASE ;
- create uesrname and password CREATE USER ;
- grant prinileges GRANT ALL PRIVILEGES ON DATABASE TO ;
- make config.env file and put DATABASE_URL= postgres://uesrname:password@localhost:5432/dbname
- Put in terminal : node database/db_build.js.
- Then put in terminal : npm run dev to run the server.

## Team members

- [Duaa](https://github.com/DuaaH)
- [Sara](https://github.com/sara219)
- [Rand](https://github.com/RandInaim)
