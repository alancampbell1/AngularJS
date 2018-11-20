'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope','$firebaseArray', function($scope, $firebaseArray) {

	var config = {
    apiKey: "AIzaSyDbjJNdXQ1T5tx8jywkz2OfOQ8cB1FPv2U",
    authDomain: "contactlistdev100.firebaseapp.com",
    databaseURL: "https://contactlistdev100.firebaseio.com",
    projectId: "contactlistdev100",
    storageBucket: "contactlistdev100.appspot.com",
    messagingSenderId: "226169521214"
  };

	if (!firebase.apps.length) {
		firebase.initializeApp(config);
	}

	//firebase.initializeApp(config);
	var ref = firebase.database().ref();

	//console.log('Contacts Controller loaded');
	//var ref = new Firebase('https://console.firebase.google.com/project/contactlistdev100');

	$scope.contacts = $firebaseArray(ref);

  $scope.addFormShow = true;
  $scope.editFormShow = false;

  $scope.showEditForm = function(contact){
    $scope.addFormShow = false;
    $scope.editFormShow = true;

    $scope.id = contact.$id;
    $scope.name = contact.name;
    $scope.email = contact.email;
    $scope.phone = contact.phone;
  }


  $scope.addContact = function(){
    //console.log('Adding Contact');

    $scope.contacts.$add({
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone
    }).then(function(ref){
      var id = ref.key;
      console.log('Added contact: ' + id);

      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
    });
  }

  $scope.editContact = function(){
    var id = $scope.id;

    var record = $scope.contacts.$getRecord(id);

    record.name = $scope.name;
    record.email = $scope.email;
    record.phone = $scope.phone;

    //Save
    $scope.contacts.$save(record).then(function(ref){
        console.log(ref.key);
    });

      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
  }

  $scope.removeContacts = function(contact){
    $scope.contacts.$remove(contact);
  }
}]);