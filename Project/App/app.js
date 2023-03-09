const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path')

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.listen(port, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + port)
  else
    console.log("Error occurred, server can't start", error);
}
);