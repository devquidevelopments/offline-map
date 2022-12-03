const express = require('express')
const path = require('path')
const fs = require('fs')
const https = require('https')

const httpPort = 80
const httpsPort = 443
const key = fs.readFileSync('./certs/hello-world.key');
const cert = fs.readFileSync('./certs/hello-world.crt');

const app = express()
const server = https.createServer({ key: key, cert: cert }, app);

app.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
})

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(httpPort, function () {
    console.log(`Listening on port ${httpPort}!`)
})

server.listen(httpsPort, function () {
    console.log(`Listening on port ${httpsPort}!`)
})

// const https = require('https')
// const fs = require('fs');

// const options = {
//     key: fs.readFileSync('./certs/hello-world.key'),
//     cert: fs.readFileSync('./certs/hello-world.crt')
// };

// https.createServer(options, function (req, res) {
//     res.writeHead(200);
//     res.end("hello world\n");
//   }).listen(8000);