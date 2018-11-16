//This file contains the code needed for controllers_3.html

var app = angular.module('myApp', []);
        app.controller('personCtrl', function($scope){
            $scope.firstname = "Alan";
            $scope.lastname = "Campbell";
            //function defined called fullname that returns the two variables
            $scope.fullname = function(){
                return $scope.firstname + " " + $scope.lastname;
            };
        });