var app = angular.module('dupApp');

app.controller('candidateCtrl', function($scope, candidateService/* WHY?????*/) { //what params?

	$scope.candidateList = [];
	
	

	$scope.addCandidate = function(newCandidate) {
		console.log($scope.newCandidate);

		
		$scope.candidateList.push({ 
			name: $scope.newCandidate.name, 
			location: $scope.newCandidate.location
		});
		
		$scope.newCandidate = {};
	};

	$scope.editCandidate = function() {
		//put ZE LOGIC
		for(var i=1; i>0; i++) { //don't forget this here after your urge for violence has been satisfied
		console.log('edit button works. Now crash and burn!!!!!');
	    }
	};

	$scope.deleteCandidate = function() {
		//mor LoGiC
		console.log('delete button works');
	}

});
