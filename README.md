# Project Name

Movie Sagas Project

## Description

For this application, I had detail data of several prominent movies, stored in a number of tables within a database, that needed to be rendered on the DOM for viewing, interaction, and addition. These movies needed to be displayed with their respective poster images. If a user clicks on these images, the user is navigated to a details page which displays text details of the selected movie. I also needed to establish a method for a user to add a movie, write a description, and assign it a genre on the client side to be stored in this database along with these original movies.

I needed to implement redux-sagas to handle how data was being passed between client-side components and to facilitate communication with the server and database. I had reducers temporarily hold relevant movie data that gets appended to the DOM. I had saga functions handle communication with the server with instructions to the database to either pull, edit or add movie data. 

To see the fully functional site, please visit: (heroku site)

## Screen Shot

### Prerequisites

## Installation

## Usage

## Built With

## Acknowledgement

Thanks to the instructors and fellow students at Prime Digital Academy for helping me bring this application to life.

## Support

If you have any suggestions or issues, please email me at dannymussie7@gmail.com

## Checklist

Database Setup

[x] - create saga_movies_weekend database
[x] - run queries from database.sql on database

Installation

[x] - npm install
[x] - npm run server
[x] - npm run client

Feature List

# Home/List Page
[x] - add onClick/onChange to navigate to /details on click of poster (look back to gallery assignment for reference)
[x] - link/navigation to Add Movie Page

# Details Page
[x] - create details folder and file
[x] - GET request for specific movie [req.params and :id] 
[x] - link/nav back to Home/List Page

# Add Movie Page
[x] - create movie title input field
[x] - create image URL input field
[x] - add movie description text area
[x] - add dropdown (for genres)
[x] - implement Cancel button with navigates back to Home
[x] - impliment Save button, sends inputs to database AND navigates back to Home (now with new movie)

# General Considerations
[] - Add styling
[] - frequent commits, consider branching to break down features
[] - code comments
[] - update README to include description, screenshots, etc
