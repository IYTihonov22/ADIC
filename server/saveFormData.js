// Importing required modules
const express = require('express'); // Express framework for handling HTTP requests and routes
const fs = require('fs'); // File system module for reading and writing files

// Create an Express application
const app = express();

// Set the port number for the server
const port = 3000;

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specified HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specified headers
    next();
});

// Handling GET request at the root URL
app.get('/', (req, res) => {
    res.send('Server is running'); // Send a simple response
})

// Handling POST request to save form data
app.post('/saveFormData', (req, res) => {
    console.log('\x1b[33mReceived a request to save form data.\x1b[0m'); // Yellow color console log

    const formData = req.body; // Extract the form data from the request body
    console.log('\x1b[33mForm data received:\x1b[0m', formData); // Yellow color console log

    const formDataString = JSON.stringify(formData) + ',\n'; // Convert form data to a string
    console.log('\x1b[33mForm data converted to string:\x1b[0m', formDataString); // Yellow color console log

    // Append the form data string to a file named 'formData.txt'
    fs.appendFile('formData.txt', formDataString, 'utf8', (err) => {
        if (err) {
            console.log('\x1b[31mError saving the form data:\x1b[0m', err); // Red color console log
            res.sendStatus(500); // Send a 500 status code (Internal Server Error)
        } else {
            console.log('\x1b[32mForm data saved successfully!\x1b[0m'); // Green color console log
            res.sendStatus(200); // Send a 200 status code (OK)
        }
    });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`\x1b[32mServer is running on http://localhost:${port}\x1b[0m`); // Print a message indicating the server is running
});
