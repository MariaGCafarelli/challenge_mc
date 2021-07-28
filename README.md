# Frontend Position Challenge - María Cafarelli


This repository contains the result of the test assigned to Maria Cafarelli for the position of Frontend Developer. 

The result shows random search results for beers and non-alcoholic beers; You can also do more specific searches by name and brewed before. Validations were made according to the selected input, the results are displayed and an error message is shown otherwise.

# DEVELOPMENT ENVIRONMENT


The project was developed under this specifications:

- "react": "17.0.2"
- "node": "14.16.0"
- "npm": "6.14.11"

Important libreries:

- "styled-components": `https://styled-components.com/docs`
- "@material-ui/core": `https://material-ui.com/`
- "@material-ui/icons": `https://material-ui.com/es/getting-started/installation/`
- "sweetalert2": `https://sweetalert2.github.io/`

The PunkApi was used to obtain the information displayed, found at `https://punkapi.com`. 

# INSTALLATION AND SETUP INSTRUCTIONS


After cloning down this repository. You will need `node` and `npm` installed globally on your machine.

## Env Variables


A single environment variable is used with the URL corresponding to the api connection under the name `REACT_APP_ROOT_ENDPOINT` in the `.env` file. This decision was made based on being able to manage the routes according to the development environment in which it is located.

## Installation:


- `npm install`

This must be the first step to run this application. Downloads dependencies defined in a package.json file and generates a node_modules folder with the installed modules.

## To Start Server:


- `npm start`

Open [http://localhost:3000](http://localhost:3000) to view your work in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## To Visit App:


Once the project has started, go to [http://localhost:3000](http://localhost:3000) to view it in the browser locally.

# Project Architecture


The source folder has 5 particular folders that organize the needs of the project:

- api: contains the functions for each call to the api and handles the responses.

- components: contains each component deployed to the user. The main ones are: search and random, then beer; finally pagination buttons, loader and modal message are useful to the user experience.

- helpers: contains the functions that handle the actions performed by each component, they also serve as a connection between the api and the component.

- screens: contains the main components included for the view.

- styles: contains all the global style of the application, color and text variables are defined, as well as font sizes for texts.

# Tests


Although the challange required a validation test, I currently do not feel able to deliver a valuable result in this area of ​​development. However, I did manual tests for each use case proposed in the challenge statement. 

For the validation test using an externar library, I know that we would have to start doing rendering tests, guaranteeing that the parent component generates the app without problems, as well as the correct functionality of the random and search components. Next, it would be important to develop a test to test the inputs and their validations. Then, according to the theory I read, I should mock one of the call api; This would allow to test that the calls are generated well without making an extra call to the api. 

I am completely willing to learn and develop better as a professional in all areas, including this one, however I only handle the basic theory about it. In my current job we do not handle these practices, although they are extremely important and that's why I know it's a disadvantage not to do it.

# Extra comments


- To get a non-alcoholic beer, I take advantage of the abv_lt parameter that the documentation offers with a number between and 0.5 and 1.5 and no result is obtained, so no need to apply any random.

- I would have like to be able to show the number of pages associated with the paging of each search, however the documentation does not offer any parameters for that.