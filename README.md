# programming-courses

## user Journey

- as a user I will be able to see programming courses
- as a user I should be able to see courses details
- as a user I should be able to add courses

## file structure

```
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

  - views

    - layouts
      - main.hbs
    - partials
      - header.hbs
    - home.hbs
    - course.hbs
    - serverError.hbs

  - app.js
  - server.js
```

## endpoints

```
1-  endpoint '/' => Home Page
GET request => respond with html
Display courses

2- endPoint '/course/{id}' =>
GET request => respond with html
Display details about course

3- endPoint '/addcourse' => add details
POST request => insert into database
```

## Database schema

![Untitled-Diagram-_5_](https://user-images.githubusercontent.com/47992412/62526882-c8ef7780-b842-11e9-8e96-7e41c2f1ebd8.png)

## Instructions :

To use our Repo without heroku database,you should:

- git clone this repo
- Put in terminal : npm install .
- create database **CREATE DATABASE** ;
- create uesrname and password **CREATE USER** ;
- grant prinileges **GRANT ALL PRIVILEGES ON DATABASE TO** ;
- make config.env file and put **DATABASE_URL= postgres://uesrname:password@localhost:5432/dbname**
- Put in terminal : **node database/db_build.js**.
- Then put in terminal : **npm run dev** to run the server.

## Team members

- [Duaa](https://github.com/DuaaH)
- [Sara](https://github.com/sara219)
- [Rand](https://github.com/RandInaim)
