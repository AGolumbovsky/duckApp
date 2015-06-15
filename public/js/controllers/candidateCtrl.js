var app = angular.module('dupApp');

app.controller('candidateCtrl', function($scope, candidateService) { //what params?



	$scope.candidateList = []; 
	
	$scope.loadCandidates = function() {
		console.log('Load cans...will work some day');

		return candidateService.getCandidates() // not sure
			.then(candidateService.getCandidates()) ///what here?
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
		console.log('editCandidate() works' );

	    
	};

	$scope.serchCandidates = function() {
		
		console.log('searchCandidates() works');
	}

	$scope.deleteCandidate = function() {
		//mor LoGiC
		console.log('deleteCandidate() works');
	};

	
	// var init = function('load', $scope.loadCandidates, initCB) {
	// 	var internalDependencies = $q.all($scope.loadCandidates);
	// 	return internalDependencies.then(initCB);
	// 	} 
	// }
	var init = function() {
		console.log('why is this loading 2 times in a row?')
		$scope.loadCandidates();
	};
	init();


});