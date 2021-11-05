# Project Name

Movie Sagas Project

## Description

For this application, I had detail data of several prominent movies, stored in a number of tables within a database, that needed to be rendered on the DOM for viewing, interaction, and addition. These movies needed to be displayed with their respective poster images. If a user clicks on these images, the user is navigated to a details page which displays text details of the selected movie. I also needed to establish a method for a user to add a movie, write a description, and assign it a genre on the client side to be stored in this database along with these original movies.

I needed to implement redux-sagas to handle how data was being passed between client-side components and to facilitate communication with the server and database. I had reducers temporarily hold relevant movie data that gets appended to the DOM. I had saga functions handle communication with the server with instructions to the database to either pull, edit or add movie data. 

To see the fully functional site, please visit: (heroku site)

## Screen Shot
-[Home Page](public/images/HomePage.jpg)
-[Movie Details Page](public/images/MovieDetails.jpg)
-[Add Movie Page](public/images/AddMoviePage.jpg)

## Technologies
This version uses React, Redux-Sagas, Express, PostgreSQL and Material UI. 
(a full list of dependencies can be found in `package.json`).

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Installation
- npm install
- npm run server
- npm run client

## Usage
- On the main movie page, select a movie poster to navigate to a details page with more information on the selected movie
- Once on the details page, you can navigate back to the home page
- You are able to add a new movie to the list of movies by selecting the Add button on the home page
- Once on the add page, you can add a movie name, a new poster (image url), select a movie genre on a dropdown, and save your new selection to see your new movie on the home page and save that new movie to the database
- Hitting cancel on the add page will take you back to the home page 

## Acknowledgement

Thanks to the instructors and fellow students at Prime Digital Academy for helping me bring this application to life.

## Support

If you have any suggestions or issues, please email me at dannymussie7@gmail.com

