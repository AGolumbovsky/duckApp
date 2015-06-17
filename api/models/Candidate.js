var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSchema = new Schema({
	name: String, 
	location: String, 
	rating: Number
	//more once this works
});

module.exports = mongoose.model('Candidate', candidateSchema);