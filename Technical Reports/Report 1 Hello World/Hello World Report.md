# **Progressive Web Applications and Creating an Offline Maps Application**

# Abstract
HyperText Markup Language (HTML) has been the standard language for web-based documents since 2000 and it has been used to create all kinds of web applications since with the latest version, HTML5, being released in 2014. For websites and applications on the world wide web (WWW), the user would have to have an internet connection to access them. The new concept of a progressive web app (PWA) reduces this dependency on a stable internet connection as the standards for a PWA includes the requirement that it be accessible offline. In 2018, Google released Google Lighthouse which allowed developers to test web applications for compliance with standards and best practices.

# 1. Introduction
PWAs are a relatively new concept and are commonly used for offline applications due to their ability to be published online but also installed to a user's device without the need for an application distribution such as the iOS App Store or the Google Play Store without compromising on functionality or security. A PWA also has to adhere to 8 key principles which make them especially useful in the creation of an offline maps application.

This report will discuss some of these principles and how they are important to the development of such an application as well as describing the steps involved. The development of an example "Hello World" PWA will then be documented with the technologies used and how the application aligns with the PWA criteria using Google Lighthouse.

# 2. PWAs
## 2.1. Relevance of PWAs in this Project
PWAs have a set of 8 key principles which should be observed to identify as one, however, this report will focus on the most relevant to making an offline maps application.

The application should be 'installable' which means that it can be downloaded to a device and easily accessed from the user's home screen/desktop which is important when being used on mobile devices as it reduces the time needed to access the application.

PWAs should also be 'responsively designed' and 'progressively enhanced' so that the user interface (UI) will fit on any screen whether it be a mobile phone, tablet or desktop and the application has its core features available on all platforms with the advanced/unique features being available on more heavily supported ones. This is crucial as mapping applications, such as Google Maps, are used on a large variety of mobile devices which have varying display sizes and support for specific features.

Google Maps also has the ability to download maps on demand for offline use which links to the second principle which is 'network independence'. An app is perceived to have this quality if:
* The user can revisit the app without a network connection.
* The user can browse any previously viewed content even in poor network conditions.
* The app can control what is shown to the user when there is no network connection.

Finally, the user should have the ability to be updated with any changes or new information even when they are not looking at the application. This feature is called 're-engageability' which is important for mapping applications for when the user is using directions on the app. The user should be able to receive updates on their progress, further instructions, and warnings through notifications without being on the app.

## 2.2. Steps Required to Develop a PWA
PWAs are relatively simple to develop with many tools available to assist developers during the whole process. The steps involved are:
* Create project structure
* Create content for webpages using HTML
* Gather resources required (images etc.)
* Design UI to display content in a responsive and aesthetic way using CSS
* Use NodeJS with ExpressJS to host website locally to test content
* Create manifest file to store content for offline usage
    * Create splash screen

# 3. Developing the Example Application
The example 
## 3.1. Technologies used

Git
NodeJS
ExpressJS
Nodemon
Service Workers
Chrome
    Lighthouse
OpenSSL

## 3.2. 

### 3.2.1 Creating the Web Page
HTML5
    index.html
CSS
    style.css
Images

### 3.2.2 Create Files for Local Usage
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

### 3.4. Completing Required Steps for a PWA
pwa.webmanifest
update index.html to use manifest
globe images for splash screen and AHS
HTTPS
sw.js

### 3.5. Deploying the Web Application
Chrome and SSL certificates
Add certificate to trusted.
Override need for valid HTTPS certificate

```
chrome.exe --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:443
```

## 4. Conclusion

## 5. References
[Introduction to progressive web apps - Progressive web apps (PWAs) | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction#:~:text=An%20app%20could%20be%20considered,app%20is%2C%20such%20as%20Lighthouse.)
[How to build a progressive web app (PWA) with Node.js - LogRocket Blog](https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/)
[Testing Service Workers locally with self signed certificates (deanhume.com)](https://deanhume.com/testing-service-workers-locally-with-self-signed-certificates/)
