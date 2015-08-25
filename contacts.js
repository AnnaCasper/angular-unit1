var app = angular.module('contactsApp', []);

app.controller('ContactsAppController', function ($scope) {
  $scope.test = 'test';
  $scope.contacts = [{name: 'Anna', email: 'acasper@gmail.com', phone: '720-220-5651'}];
  $scope.addContact = function (name, email, phone) {
    $scope.contacts.push({name: name, email: email, phone: phone})
    $scope.name = '';
    $scope.email = '';
    $scope.phone = '';
  };
  $scope.turnRed = function (){
    $scope.name = 'ANNA'
  };
})
