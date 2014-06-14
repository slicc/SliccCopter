//the server
var http = require('http');

//express for routing
var express = require("express");
var app = express();

//using vash for the view engine
app.set("view engine", "vash");

//map the routes
var routeInit = require("./controllers/routeInit");
routeInit.init(app);

//initialise lessification
var lessMiddleware = require('less-middleware');
app.use(lessMiddleware(__dirname + '/public'));

//set the location for static resources
app.use(express.static(__dirname + "/public"));

//start the server off
http.createServer(app).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
