var app = angular.module('dupApp');

app.controller('candidateCtrl', function($scope, candidateService) { //what params?

	$scope.candidateList = []; 
	
	$scope.loadCandidates = function(some_bs) {
		console.log('Load cans...will work some day');
		candidateService.getCandidates() // not sure
			.then() ///what here?
	}
   
	$scope.addCandidate = function() {
		console.log($scope.newCandidate);

		
		$scope.candidateList.push($scope.newCandidate);

		candidateService.addCandidate($scope.newCandidate)
		.then(function(res) {
			console.log('got response', res);
			candidateService.getCandidates().then(function(res) {
				$scope.candidateList = res;
			})
		})
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
