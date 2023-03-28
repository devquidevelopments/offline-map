const express = require('express');
const http = require('http');
const path = require('path')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')))

app.get('/fyp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'));
});

app.listen(port, (error) => {
    if (!error)
        console.log("Server is Successfully Running, and App is listening on port " + port)
    else
        console.log("Error occurred, server can't start", error);
}
);