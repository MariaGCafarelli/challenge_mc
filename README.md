** Glofox Frontend Position Challenge - María Cafarelli **

This repository contains the main 3mit landing, personal brand and styles of their belong.

# DEVELOPMENT ENVIRONMENT

The project was developed under this specifications:

- "react": "17.0.2"
- "node": "14.16.0"
- "npm": "6.14.11"

Important libreries:

- "@material-ui/core": "^4.12.2",
- "@material-ui/icons": "^4.11.2",

The PunkApi was used to obtain the information displayed, found at `https://punkapi.com`. 

# ENV VARIABLES

A single environment variable is used with the URL corresponding to the api connection under the name `REACT_APP_ROOT_ENDPOINT` in the `.env` file.

# INSTALLATION AND SETUP INSTRUCTIONS

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

## Installation:

- `npm install`

This must be the first step to run this application. Downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.

## To Start Server:

- `npm start`

Open [http://localhost:3000](http://localhost:3000) to view your work in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## To Visit App:

Once the project has started, go to [http://localhost:3000](http://localhost:3000) to view it in the browser locally.

# PROJECT Architecture


The source folder has 5 particular folders that organize the needs of the project:

- api: contains the functions for each call to the api and handles the responses

- components: contains each component deployed to the user. The main ones are: search and random, then beer; finally pagination buttons, loader and modal message are useful to the user experience.

- helpers: contains the functions that handle the actions performed by each component, they also serve as a connection between the api and the component

- screens: contains the main components included for the view

- styles: contains all the global style of the application, color and text variables are defined, as well as font sizes for texts