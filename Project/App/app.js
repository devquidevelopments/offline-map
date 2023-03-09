const express = require('express');
const http = require('http')
const https = require('https')
const app = express();
const port = 3000;

const path = require('path')

app.get('/fyp/home', (req, res) => {
  res.sendFile(path.join(__dirname,'lib/home.html'));
});

app.listen(port, (error) =>{
  if(!error)
      console.log("Server is Successfully Running, and App is listening on port "+ port)
  else 
      console.log("Error occurred, server can't start", error);
  }
);