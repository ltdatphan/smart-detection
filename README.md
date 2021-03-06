# Smart Detection
This project is part of the Zero-To-Mastery Web Development course, taught by Andrei Neagoie.

It is a full-stack web application that users can use Clarifai API to detect faces in an image. This repository is the front-end. For the back-end repository, visit [here](https://github.com/ltdatphan/smart-detection-api/). 
  
The live project is available [here](https://ltdatphan.github.io/smart-detection/). (First interaction like login/signup might be slow due to cold start).

![image](https://user-images.githubusercontent.com/29266892/159513596-15e16b40-767f-4338-8dcf-39edb2b95749.png)

# Features
- Responsive ReactJS front-end with account registration and login forms
- PostgreSQL database for storing users' login credentials with password hashing and their number of submissions 
- ExpressJS backend that handles account logins, registrations and API calls to Clarifai API

# Technologies used
## Front-end
- HTML5
- CSS
- JavaScript
- React.JS
- Tachyons - CSS toolkit 

## Back-end
- Express.js - Node.js web framework
- bcrypt - encryption library to hash and compare user's password
- knex.js - query builder library to interact with PostgreSQL
- cors - enable cross-origin-resource sharing since front-end and back-end are hosted on different domains
- clarifai - Clarifai API JavaScript client used to interact with their API
- PostgreSQL - database to store users' credentials and their number of submissions

## API 
- [Clarifai](https://www.clarifai.com/) by using a face detection model

## Deployment
- Front-end: to GitHub Pages using [gh-pages](https://www.npmjs.com/package/gh-pages) npm package
- Back-end: to Heroku using git
