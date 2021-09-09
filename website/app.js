/* Global Variables */
const WEATHER_APP_API_KEYS = '&appid=/*PASTE_YOUR_API_KEYS*/';
const WEATHER_APP_BASE_URL =
	'https://api.openweathermap.org/data/2.5/weather?zip=';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

/**
 * @description Make a GET request to the OpenWeatherMap API
 * @param {String} url the endpoint to send the GET request
 * @param {String} zip the zip code of the city
 * @param {String} key the api key of the weather app
 * @returns The returned weather from the OpenWeatherMap API according to the zip code entered
 */
const getWeather = async (url, zip, key) => {
	const response = await fetch(url + zip + key);

	try {
		const responseData = await response.json();
		return responseData.main.temp;
	} catch (error) {
		console.log('error', error);
	}
};

/**
 * @description Make a POST request to our API
 * @param {String} url the endpoint to send the POST request
 * @param {Object} data the data to send in request
 * @returns The returned success message (assuming it never fails)
 */
const postData = async (url, data) => {
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	try {
		const responseData = await response.json();
		return responseData;
	} catch (error) {
		console.log('error', error);
	}
};

/**
 * @description Make a GET request to our API then updates the DOM according to the returned response
 * @param {String} url the endpoint to send the GET request
 */
const updateUI = async url => {
	const response = await fetch(url);
	try {
		const responseData = await response.json();
		const dateElement = document.getElementById('date');
		const tempElement = document.getElementById('temp');
		const contentElement = document.getElementById('content');

		dateElement.innerHTML = responseData.date;
		tempElement.innerHTML = responseData.temperature;
		contentElement.innerHTML = responseData.userResponse;
	} catch (error) {
		console.log('error', error);
	}
};

/**
 *  @description Adding a click Handler for 'generate button' to send a GET request
 *				 to weather app according to zip code written in 'zip input'
 *               then send a POST request to our API to save the weather data with
 *               the date and comments of user written in 'feelings textarea' and
 *         		 update the UI according to the information returned from a GET
 * 				 request that sent to our API
 */
document.getElementById('generate').addEventListener('click', () => {
	//TODO: remove Test Data
	const zip = document.getElementById('zip').value;
	if (zip) {
		// Checking whether there any zip code written
		getWeather(WEATHER_APP_BASE_URL, zip, WEATHER_APP_API_KEYS)
			.then(temperature => {
				const userResponse = document.getElementById('feelings').value;
				return postData('/data', { temperature, date: newDate, userResponse });
			})
			.then(() => {
				updateUI('/data');
			})
			.catch(error => {
				console.log(error);
			});
	}
});
