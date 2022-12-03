# **Creating an Offline HTML5 Application**

## Abstract
HyperText Markup Language (HTML) has been the standard language for web-based documents since 2000 and it has been used to create all kinds of web applications since with the latest version, HTML5, being released in 2014. For websites and applications on the world wide web (WWW), the user would have to have an internet connection to access them. However, recently the concept of a progressive web app (PWA) has become common with many major companies applying this concept to their websites and applications. In 2018, Google released Google Lighthouse which allowed developers to test web applications for compliance with standards and best practices. One of the standards determined for a PWA is the ability for the application to be accessible while offline.

## 1. Introduction

* Topic
* Purpose and situation
* Audience
* Overview
* Background

In this report, I will discuss the relevance of PWAs in the creation of an offline HTML5 application, the steps required to create one and the technologies I used to make a "Hello World" offline application. 

## 2. Developing the Application

### 2.1. Creating the Web Page

HTML5
    index.html
CSS
    style.css
Images

### 2.2. Create Files for Local Usage

NodeJS
npm init
package.json
ExpressJS
Nodemon
npm install express nodemon
"server-debug": "nodemon --inspect server.js"
server.js
pwa.js
npm start

### 2.3. Completing Required Steps for a PWA

pwa.webmanifest
update index.html to use manifest
globe images for splash screen and AHS
HTTPS
sw.js

### 2.4. Deploying the Web Application

Chrome and SSL certificates
Add certificate to trusted.
Override need for valid HTTPS certificate

```
chrome.exe --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:443
```

## 3. Conclusion

## 4. References

[How to build a progressive web app (PWA) with Node.js - LogRocket Blog](https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/)
[Testing Service Workers locally with self signed certificates (deanhume.com)](https://deanhume.com/testing-service-workers-locally-with-self-signed-certificates/)
