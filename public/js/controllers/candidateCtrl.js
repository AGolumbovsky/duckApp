var app = angular.module('dupApp');

app.controller('candidateCtrl', function($scope, candidateService, ) { //what params?

	$scope.candidateList = [];
	//add something here? $scope.crap = .fromDB.crap?

	$scope.addCandidate = function(newCandidate) {
		console.log($scope.newcandidate);

		
		$scope.candidateList.push({ 
			name: $scope.newCandidate.name, 
			location: $scope.newCandidate.location
		});
		
		$scope.newCandidate = {};
	};

	$scope.editCandidate = function() {
		//put ZE LOGIC
		console.log('edit button works');
	};

	$scope.deleteCandidate = function() {
		//mor LoGiC
		console.log('delete button works');
	}
});