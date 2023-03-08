const express = require('express');
const http = require('http')
const https = require('https')
const app = express();
const port = 3000;

app.get('/fyp', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});