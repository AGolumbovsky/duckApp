var app = angular.module('dupApp');

app.service('candidateService', function($http, $q) {

	this.getCandidates = function() {
		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: '/candidates'
		})
			.then(function(response) {
				dfd.resolve(response.data);
			});
			return dfd.promise;
	};

	this.addCandidate = function(newCandidate) {
		var dfd = $q.defer();
		$http({
			method: 'POST', 
			url: '/candidates', 
			data: newCandidate
		})
			.then(function(response) {
				dfd.resolve(response.data);
			});
			return dfd.promise;
	};



});
