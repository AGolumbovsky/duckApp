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


// All app.get stuff maybe will go into ROUTES folder

// end Points

//post candidate to db
app.post('/candidates', function(req, res) {
	var candidate = new Candidate(req.body);
	candidate.save(function(err, newCan) {
		if (err) {
			console.log("can't create a candidate", err);
		}
		res.json(newCan);
	});
});


// app.post over
// app.post('candidates', function(req, res) {
// 	console.log(req.body);

// 	db.candidates.insert(req.body, function(err, cand) {
// 		res.json(cand);
// 	});
// });

//get all candidates from db

//TESTs
app.get('/candidates', function(req, res) { // change "home" to '/' if bug

	console.log('server received GET request');

	db.candidates.find(function(err, cands) {
		condole.log(cands);
		res.json(cands);
	});

});

app.get('api/candidates/:name', function(req, res) {
    var name = req.params.name;
    var getCity = req.query.getCity;
    var getState = req.query.getState;
    res.send({name: name, city: getCity, state: getState}) // results of imagination
})


app.get('/hidden', function(req, res) {
    res.send('You are in the restricted area. Please proceed with caution');
})

app.get('*', function(req, res) {
	res.send("Not here. Message 420", 404)
})

//app.get('api/candidates', function(req, res) {
//	Candidate
//	.find()
//	.exec().then(function(candidates) {
//		return res.json(candidates);
//	});
//});



app.listen(port, function() {
	console.log('listening on ' + port);
});
// ALT code

//app.listen(process.env.PORT || port /* || 8080 */);