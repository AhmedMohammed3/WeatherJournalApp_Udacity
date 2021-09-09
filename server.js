// Setup empty JS object to act as endpoint for all routes
const projectData = {};
const PORT = 10010;
// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
app.listen(PORT, () => {
	console.log(`Server is up and running on port ${PORT}`);
});

// =========================Routes=========================

// GET '/data' returns projectData object
app.get('/data', (req, res) => {
	res.send(projectData);
});

// POST '/data' add data to projectData object and returns success message
app.post('/data', (req, res) => {
	projectData['temperature'] = req.body.temperature;
	projectData['date'] = req.body.date;
	projectData['userResponse'] = req.body.userResponse;
	res.send({ message: 'success' });
});
