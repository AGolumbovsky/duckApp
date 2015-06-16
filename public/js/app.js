var app = angular.module('dupApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html', 
			controller: 'candidateCtrl'
		})
		.when('/enterCan', {
			templateUrl: 'templates/enterCan.html', 
			controller: 'candidateCtrl'
		})
		.otherwise({
			redirectTo: '/ass'
		})
});

