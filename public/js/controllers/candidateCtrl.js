var app = angular.module('dupApp');

app.controller('candidateCtrl', function($scope) {

	$scope.candidateList = [];

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
		console.log('edit button works')
	};
});