var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//require models 
//var User = require('./api/models/User');
var Candidate = require('./api/models/Candidate');

//create the server
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

//post candidate to db
app.post('/api/candidates', function(req, res) {
	var candidate = new Candidate(req.body);
	candidate.save(function(err, new_candidate) {
		if (err) {
			console.log("can't create a candidate", err);
		}
		res.json(new_candidate);
	});
});

//get all candidates from db
app.get('api/candidates', function(req, res) {
	Place
	.find()
	.exec().then(function(candidates) {
		return res.json(candidates);
	});
});








app.listen(port, function() {
	console.log('listening on ' + port);
});