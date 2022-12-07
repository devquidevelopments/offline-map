// Gets required dependencies.
const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

// Assigns ports used to access the website.
const httpPort = 80
const httpsPort = 443

// Assigns SSL certificate to allow service workers to be used.
const key = fs.readFileSync('./certs/server.key');
const cert = fs.readFileSync('./certs/server.crt');

// Creates application object and starts local app server.
const app = express()
const server = https.createServer({ key: key, cert: cert }, app);

/**
 * Redirects to requested url in https.
 * 
 * @returns {Object} HTTPS url
 * @see https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/
 */
app.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
})

// Mounts app at "/public".
app.use(express.static(path.join(__dirname, '/public')))

/**
 * Assigns index.html as the starting URL.
 */
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

/**
 * Listen to local app port at 80.
 */
app.listen(httpPort, function () {
    console.log(`Listening on port ${httpPort}!`)
})

/**
 * Listen to online app port at 443.
 */
server.listen(httpsPort, function () {
    console.log(`Listening on port ${httpsPort}!`)
})