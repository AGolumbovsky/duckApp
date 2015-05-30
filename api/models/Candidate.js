var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var candidateSchema = new Schema({
	name: String, 
	location: String
	//more once this shit works
});

module.exports = mongoose.model('Candidate', candidateSchema);