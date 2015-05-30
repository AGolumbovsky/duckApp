var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//require models 
//var User = require('./api/models/User');
var Candidate = require('./api/models/Candidate');

//create an appliction
var app = express();

// middolware
// static == html css image files in the
// in the public forlder
app.use(express.static(__dirname + '/public'));
//parse the shit out of json
app.use(bodyParser.json());

// connections to mongo
var port = 8080;
mongoose.connect('mongodb://localhost/dupApp');
var db = mongoose.connection;


//test



//endpoints




app.listen(port, function() {
	console.log('listening on ' + port);
});