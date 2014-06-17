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

//start the server off on a port provided by azure if available
var port = process.env.PORT || 1337;
http.createServer(app).listen(port);

console.log('Server running at: ' + port);
