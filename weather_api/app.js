var classApp = angular.module('weatherApp', []);

classApp.controller('weatherCtrl', function($scope, $http){
	var vm = $scope;
	vm.channelInfo = {
		heading:"Open Weather API Project",
		subheading1: "Sample Project by Alan Campbell",
		subheading2: {
			name: "Check out the source code: ",
			title: "Alan's GitHub Account",
			link: "https://github.com/alancampbell1"
		}
	};

	$http.get("http://ip-api.com/json").then(function(response){
		vm.lat = response.data.lat;
		vm.lon = response.data.lon;
		
		var apiKey = "c6b0b790234ce78c4373c1b8682916da";
		var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat=" + vm.lat + "&lon=" + vm.lon + "&appid=" + apiKey;

		$http.get(openWeatherURL).then(function(response){
			vm.description = response.data.weather[0].description;
			vm.speed = (2.237 * response.data.wind.speed).toFixed(1) + " mph";
			vm.name = response.data.name;
			vm.temp = response.data.main.temp;
			vm.fTemp = (vm.temp * (9/5) - 459.67).toFixed(1) + " (F)";
			vm.cTemp = (vm.temp-273).toFixed(1) + " (C)";
		});
	});
});