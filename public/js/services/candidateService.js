var app = angular.module('dupApp');

app.service('candidateService', function($http, $q) {

	//get all the candidates from db
	this.getCandidates = function() {
		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: '/candidates'
		})
			.then(function(res) {
				dfd.resolve(res.data);
			});
			return dfd.promise;
	};

	// get one candidate from db
	this.getCandidate = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET', 
			url: '/candidates/:id'
		})
			.then(function(res) {
				dfd.resolve(res.data);
			})
		return dfd.promise;

	}

	// add a new candidate to the db
	this.addCandidate = function(newCandidate) {
		var dfd = $q.defer();

		$http({
			method: 'POST', 
			url: '/candidates', 
			data: newCandidate
		})
			.then(function(res) {
				dfd.resolve(res.data);
			});
			return dfd.promise;
	};



});
