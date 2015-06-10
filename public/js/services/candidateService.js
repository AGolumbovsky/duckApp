var app = angular.module('dupApp');

app.service('candidateService', function($http, $q) {

	this.getCandidates = function() {
		var dfd = $q.defer();

		$http({
			method: 'GET', 
			url: '/api/candidates'
		})
			.then(function(response) {
				dfd.resolve(response.data);
			});
			return dfd.promise;
	};

	this.addCandidate = function(candidate) {
		var dfd = $q.defer();
		$http({
			method: 'POST', 
			url: '/api/candidates', 
			data: candidate
		})
			.then(function(response) {
				dfd.resolve(response.data);
			});
			return dfd.promise;
	};



});
