var app = angular.module('dupApp');

app.controller('candidateCtrl', function($scope, candidateService) { //what params?

	$scope.candidateList = []; 
	
	$scope.loadCandidates = function(some_bs) {
		console.log('Load cans...will work some day');
		candidateService.getCandidates() // not sure
			.then() ///what here?
	}
   
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
		console.log('edit button, editCandidate() work' );

	    
	};

	$scope.deleteCandidate = function() {
		//mor LoGiC
		console.log('delete button, deleteCandidate() work');
	}

});
