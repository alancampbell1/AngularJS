//creating the module and naming it
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainCtrl'
	})
	.when('/home', {
		templateUrl: 'pages/home.html',
		controller: 'homeCtrl'
	})
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'aboutCtrl'
	})
	.when('/contact', {
		templateUrl: 'pages/contact.html',
		controller: 'contactCtrl'
	});

	$locationProvider.html5Mode(true);
});

//creating the controller and injecting Angular's $scope
app.controller('mainCtrl', function($scope){
	$scope.message = "Hello World";
});

app.controller('aboutCtrl', function($scope){
	$scope.message = "New Page";
});

app.controller('contactCtrl', function($scope){
	$scope.message = "Contact Page";
});

app.controller('homeCtrl', function($scope){
	$scope.message = "Home Page";
});
