var classApp = angular.module("app", []);

classApp.controller('controller1', function($scope){
	//object created
	$scope.xbox = {
		heading: "Xbox One",
		subheading: "Microsoft",
		imgURL: "http://www.batista70phone.com/wp-content/uploads/2016/06/Xbox-One-S.png",
		subheading2: "Memorable Moments",
		subheading3: "For more information please visit: ",
		wikiURL: "https://en.wikipedia.org/wiki/Xbox"
	};
	//an array of objects
	$scope.moments=[{moment: "On March 10th 2000, Bill Gates unveils the Xbox at the Games Developers Conference"},
	{moment: "On December 2nd 2005, Microsoft launches the Xbox 360 in Europe"},
	{moment: "In 2009, Xbox LIVE subscriptions hits 20 million worldwide"},
	{moment: "In May 2013, Microsoft unveils the Xbox One"}];
});