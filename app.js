
//REQUIRES:

var express = require("express.io"),
	_ = require("underscore"),
	mongoose =require("mongoose"),
	swig = require("swig") 


//Controllers:
var appController = require("./app/controller/defaultController");

//===========================

//SETINGS:

//Express.io:

var app = express();
app.http().io();

// Static files:

app.use(express.static("./public"));

//Swig:
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname+"/public/view");

//===========================



appController( app );


//  Run server //
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

var server  =  app.listen(3000, function() {
	console.log("RUN SERVER!");
    console.log('http://localhost:%d', server.address().port);
	console.log("===================================================================");
});
