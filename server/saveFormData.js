const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', (req, res) => {
  res.send('Server is running');
})

app.post('/saveFormData', (req, res) => {
  console.log('\x1b[33mReceived a request to save form data.\x1b[0m'); // Yellow color

  const formData = req.body;
  console.log('\x1b[33mForm data received:\x1b[0m', formData); // Yellow color

  const formDataString = JSON.stringify(formData) + ',\n';
  console.log('\x1b[33mForm data converted to string:\x1b[0m', formDataString); // Yellow color

  fs.appendFile('formData.txt', formDataString, 'utf8', (err) => {
      if (err) {
          console.log('\x1b[31mError saving the form data:\x1b[0m', err); // Red color
          res.sendStatus(500);
      } else {
          console.log('\x1b[32mForm data saved successfully!\x1b[0m'); // Green color
          res.sendStatus(200);
      }
  });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
