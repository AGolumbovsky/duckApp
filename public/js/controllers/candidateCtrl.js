var app = angular.module('dupApp');

app.controller('candidateCtrl', ['candidateService', function($scope, candidateService, candidates) {

	$scope.candidateList = {};
	console.log(candidates);

	// $scope.addCandidate = function() {
	// 	console.log($scope.newCandidate);

		
	// 	$scope.candidateList.push($scope.newCandidate);

	// 	candidateService.addCandidate($scope.newCandidate)
	// 	.then(function(res) {
	// 		console.log('got response', res);
	// 		candidateService.getCandidates().then(function(res) {
	// 			$scope.candidateList = res;
	// 		})
	// 	})
	// 	$scope.newCandidate = {};
	// };
	
	

	($scope.loadCandidates = function(candidateService) {

        console.log('Load cans...will work some day');

        candidateService.getCandidates() // not sure
        	.then(function(data) {
            console.log(data);
            $scope.candidateList = data;

            })
    })();







	$scope.editCandidate = function() {
		
		console.log('editCandidate() works' );

	    
	};

	$scope.searchCandidates = function() {

		console.log('searchCandidates() works');
	}

	$scope.deleteCandidate = function() {
		//mor LoGiC
		console.log('deleteCandidate() works');
		return candidateService.deleteCandidate()
			.then(candidateService.getCandidates())
	};

	
	// var init = function('load', $scope.loadCandidates, initCB) {
	// 	var internalDependencies = $q.all($scope.loadCandidates);
	// 	return internalDependencies.then(initCB);
	// 	} 
	// }


	// var init = function() {
	// 	console.log('loading 2 times in a row?')
	// 	$scope.loadCandidates();
	// };

	// init();

}]);