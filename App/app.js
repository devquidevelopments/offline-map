// Imports necessary libraries for the server
const express = require('express');
const path = require('path')

// Creates an express app object and defines the port at which it will be hosted.
const app = express();
const port = process.env.PORT || 3000;

// Mounts app at the public folder in the app directory
app.use(express.static(path.join(__dirname, '/public')))

// Sets home.html as the landing page for the application
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

// Starts the server, declaring the port at which it is hosted.
app.listen(port, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + port)
  else
    console.log("Error occurred, server can't start", error);
}
);