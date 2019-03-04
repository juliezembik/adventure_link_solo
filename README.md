# Dungeon Link
Dungeon Link is a mobile app game that can work across iOS and Android. The mission of Dungeon Link is to create an immersive and socially interactive game that players can overcome obstacles or events together by teaming up and battle creatures in dungeons, or even to accompany each other to social gatherings. There is also single user events implemented as well. This app also hopes to passively encourage active exercise among teenagers and adults.

## BUILT WITH
1. React
2. GOOGLE MAPs API
3. React-Redux
4. React-SAGAs
5. Express
6. Axios
7. Node.js
8. PostgreSQL


## Prerequisites

Software required for application to load:

1. Node.js
2. Axios
3. PostgreSQL


## Installing

Steps to get the development environment running.

Download this project.

> npm install
> 
> npm run server
> 
> npm run client


## Screenshot

(https://imgur.com/PoYBloi)
(https://imgur.com/9QF4dVh)
(https://imgur.com/lyvFuPf)


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

* Start postgres if not running already by using `brew services start postgresql`
* Run `npm start`
* Navigate to `localhost:5000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

* src/components
  * App/App
  * Footer/Footer
  * Nav/Nav
  * AboutPage/AboutPage
  * InfoPage/InfoPage
  * UserPage/UserPage
  * LoginPage/LoginPage
  * RegisterPage/RegisterPage
  * LogOutButton/LogOutButton
  * ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
