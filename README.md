

# Weather-Journal App Project

## Preview
![Project Preview](weather-app.gif)

## Description
This project creates an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.
It's built on top of [this GitHub repository](https://github.com/udacity/fend/tree/refresh-2019)
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Development](#development)
* [Contribute](#contribute)

## Installation
1. Open your terminal and run the following command<br/>
`git clone https://github.com/AhmedMohammed3/WeatherJournalApp_Udacity.git`
2. Install the necessary dependencies to run the web application by running<br/>
 `npm install`
 3. Register to [OpenWeatherMap](https://openweathermap.org/) and get your API_KEYS from your profile
 4. Open [app.js](website/app.js) and paste your API_KEYS instead of the comment PASTE_YOUR_API_KEYS in line 2
## Usage
1. Open your terminal inside the `WeatherJournalApp_Udacity` Directory
2. Start the local server by running<br/>
`npm start` or `node server.js`
## Development
The development phase was split to 2 steps:
 1. Backend Edits
	 - Installation of some dependencies needed (express, body-parser, cors).
	 - Starting instance of express app.
	 - Using cors with app.use(cors());
	 - Setting up the server on port 10010.
	 - Created GET route to send projectData object data.
	 - Create POST route to add data to projectData object and returns success message.
 2. Frontend Edits
	 - Registration to [OpenWeatherMap](https://openweathermap.org/current#zip) and acquired the API KEY.
	 - Creating of 2 global variables to hold the API KEY and weather app endpoint.
	 - Creating of a method which makes a GET request to the [OpenWeatherMap](https://openweathermap.org/current#zip) API.
	 - Creating of a method which makes a POST request to [our API](server.js)
	 - Creating of a method which makes a GET request to [our API](server.js) then updates the DOM according to the returned response.
	 - Creating of a click Handler for 'generate button' to send a GET request to weather app according to zip code written in 'zip input' then send a POST request to our API to save the weather data with the date and comments of user written in 'feelings textarea' and update the UI according to the information returned from a GET request that sent to our API
## Contribute
### Adding new features or fixing bugs
1. Open your terminal and clone the repository<br/>
     `git clone https://github.com/AhmedMohammed3/WeatherJournalApp_Udacity.git`
2. Create your branch<br/>
      `git checkout -b {YOUR_BRANCH_NAME}`
3. Make your edits and review it well.
4. Commit your changes with appropriate message. Follow [these git style guides](https://udacity.github.io/git-styleguide/)<br/>
      `git checkout -b {YOUR_BRANCH_NAME}`
5. Push your changes<br/>
      `git push origin {YOUR_BRANCH_NAME}`
6. Create a merge request