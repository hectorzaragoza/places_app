
# Project 2 - "Places" - Full Stack PEN Application

One stop shop to see the places YOU and your FRIENDS have been to - helping you make the daily choice to discover new places.

<img src="./assets/img/exploreImg.jpg">


## Idea:

The base of the application will be a map with markers of the places you and your friends have visited:
- *Those markers will have a pop-up with user and auto-generated information*
- *This will include the name of the place, a category of the place (e.g. restaurant, bar, music venue, etc. (This will change the color of the marker on the map). A review of the place and an automatically generated date stamp.*
- *The APP will use 2 APIs:*
     - Geolocation API to generate a user location and center the map upon loading
     - MapBox (forward) Geocoding API to return the coordinates for a given address and to place the marker on the map.
- *The APP will also use the MapBox GL JS open-source graphical library.*

## Process:
The user will enter an address to request coordinates from the MapBox Geocoding API to place markers on the map using the MapBox GL JS graphical library.

## Tech Stack:
1. HTML, CSS, JS, Bootstrap, MapBox GL JS (Front-end)
2. PostgreSQL and Sequelize, Node, Express, Geolocation API, MapBox Geocoding API (Back-end)

## Wireframe and ERD:

<img src="assets/img/wireFrames.JPG">
<img src="assets/img/ERD.JPG">
https://lucid.app/lucidchart/17d90f28-c2b1-4227-8aa9-671894a2e26a/edit?viewport_loc=-522%2C-1331%2C3840%2C1578%2C0_0&invitationId=inv_efa754df-04ca-454f-999a-5aceab927918

## Data:
1. User (First Name, Last Name)
2. User-Generated (Name of Place, Category, Review)
3. Auto-Generated (Date Stamp)
4. API-Generated (Matched Address, Coordinates)

## MVP:
1. User can view, add, update, and delete markers and view the map with markers with popup info.
2. User can see list of their items and related info
3. User can comment on markers

## Stretch Goals
1. APP can have users sign up and users can share markers with their connections and view their info (critical for sharing reviews)
2. MAP can be clicked and create a mark via a reverse geocode API Request to turn coordinates into an address and store it for future reference.
3. Button that returns you to the current location once you move away from it.
4. User can set the default styling for their map
5. EMERGENCY MODE: ONLY displays emergency services for local Medical, Fire, Police facilities based on a database seeded from a web scraper.

## Potential Roadblocks
1. Validating a user-provided address
2. Returning the most relevant/accurate location from the API response

## Models:
1. User 
- userId (int)
- firstName (str)
- lastName (str)
- userName (str)
- password (str)
- email (str))
2. Marker 
- markerId (int)
- name (str)
- category (str)
- review (text)
- date stamp (date)
- place name (str)
- longitude (float)
- latitude (float)
3. Comment
- commentId (int)
- name (str)
- comment (text)
- date stamp (date)


## MapBox GL JS Successfal Map Integration with GeoLocation API:
<img src="./assets/img/mbgljstest.JPG">
<img src="assets/img/mbcodetest.JPG">


## MapBox Forward Geocoding API Success:
<img src="assets/img/apiresponsetest.JPG">


## MapBox Forward Geocoding API Response Object:
<img src="assets/img/apiresponseobject.JPG">




## Project 2 Pitch Guidelines

In designing and building your project, you will start by forking and cloneing this repository, and then editing this README to include the following information: 
1. Name of your app
2. Tech stack you plan to use
3. Simple wireframes
     * Can be handdrawn, or with tool of your choice
     * Example online tool: [Miro.com](https://miro.com/)
5. API you plan to use
6. ERD
7. Example of how to call/invoke your API, and a description of what data comes back. 
8. MVP goals (x3-5)
9. Stretch goals (x2-5)
10. Any potential roadblocks?

## How to get started
1. **Fork and clone this repository.**
2. **Edit the text above to include specifics of your project.**
3. **Commit, push, and submit a pull request to this repo with your edited pitch README.**
4. *After you have met with a staff member and your pitch has been approved, suggested next steps:*
      * Write out your routes and create a RESTful routing chart.
      * Come up with a breakdown of what you plan to accomplish each day and how you are going to accomplish it.
      * Create a new git repo for your project. 
      * Make all test API calls you need to to ensure your API will be usable for this project. 
      




