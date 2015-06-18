var app = angular.module('dupApp');

app.controller('enterCanCtrl', function($scope, candidateService, $location) {

	$scope.addCandidate = function() {

		console.log($scope.newCandidate);

		candidateList.push($scope.newCandidate);

		candidateService.addCandidate($scope.newCandidate)
		.then(function(res) {

			//console.log('got response' res);

			candidateService.getCandidates()
			.then(function(res) {
				$scope.candidateList = res;
			});
		});

		$location.path('/');


	}

	
	});

	



