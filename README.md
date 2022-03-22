# Smart Detection
This project is a web application that users can use Clarifai API to detect faces in an image. This repository is the front-end. For the back-end repository, visit [here](https://github.com/ltdatphan/smart-detection-api/).  
  
The live project is available [here](https://ltdatphan.github.io/smart-detection/). (Registration and Login might be slow at first due to cold start).

![image](https://user-images.githubusercontent.com/29266892/159513596-15e16b40-767f-4338-8dcf-39edb2b95749.png)

# Features
- Responsive front-end with account registration and login forms
- Database for storing users login credentials with password hashing and their number of submissions. 
- Back-end that handles account logins, registrations and API calls

# Technologies used
## Front-end
- HTML5
- CSS
- JavaScript
- React.JS
- Tachyons (CSS toolkit)

## Back-end
- Express.js - Node.js web framework
- npm packages: bcrypt, knex, cors, clarifai
- PostgreSQL

## API 
- [Clarifai](https://www.clarifai.com/) by using a face detection model

