Create an offline HTML5 

Technologies:
NodeJS frontend
ExpressJS

Setup: https://expressjs.com/en/starter/generator.html
begin by making project
express --view=pug helloworld - creates application skeleton in a directory called helloworld
once inside that directory you can run
npm install - install dependecies
server can be run using
$env:DEBUG='helloworld:*'; npm start

Routing: https://expressjs.com/en/starter/basic-routing.html
How an application responds to a client request, involves a URL and a HTTP request method
Route definition:
app.METHOD(PATH, HANDLER) where app is an instance of express.
METHOD is a method of the express app object which correspond to a HTTP request method, in lowercase.
image.png
Examples of this would be:


PATH is a path on the server.
HANDLER is the function executed when the route is matched.


