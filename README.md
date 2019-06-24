# SHUDDER Clone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#### By Megan Schulte 6-14-2019

## Description

  This web application is designed to be a clone of the [SHUDDER](https://www.shudder.com) horror movie streaming website built with Angular and Firebase. 

## Live Demo
* visit https://shudder-clone.firebaseapp.com/

## Setup/Installation Requirements
* clone project from https://github.com/meganschultepdx/angular-shudder-clone.
* Run npm install from with in root directory to install necessary packages.
* You will need your own Firebase credentials in order for project to run correctly. Please follow the following [directions](https://www.learnhowtoprogram.com/javascript/angular-extended/firebase-introduction-and-setup) in order to log in to Firebase and obtain your own credentials to use in this project.
* Run ng serve --open to open project on local server.
* Project will automatically open in Chrome browser at localhost:4200

## Features

Below are the current features worked on today and the features that are planned for future developement.

# Current Features:

* landing page with:
  - navbar component
    - click on "Log In "in navbar to route to login page
  - footer component
    - click on "About" in footer to route to about page
* Navbar, Footer and their links to login and About show on every page or when other components are displayed.
* styling to match Shudder's styling.
* Login page has fake login form but 'login" button routes you to collections page
* Collections page features list of "featured collections" from Firebase Database
* click on Shudder logo in navbar to return to home/landing page from any other page
* live Firebase deployment


# Future Planned Features:

* replace more of the static images with built components 
* Retrieve and display collection images that are saved in Firebase storage
* Format data from Firebase to display correctly in columns with images
* Display Horror101 data from Firebase with images

 ## Known Bugs

  No known bugs

  ## Support and contact details

  Create a pull request on GitHub.

  ## Technologies Used

  * JavaScript
  * Angular
  * Typescript
  * Firebase
  * Html
  * Webpack
  * npm
  * CSS
  * JQuery
  * Bootstrap

  ### License

  GPL, keep information free.

  Copyright (c) 2019 Megan Schulte

