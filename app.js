var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
    $scope.FavColor = "Purple";
    $scope.secondsInACentury = (((24 * 60) * 60) * 365) * 100;
    $scope.rightNow = new Date;
    $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
    $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    $scope.numbers = [1,1,2,5,6,9,9,9];
    $scope.objects = {first: "Anna", last: "Casper", age: 25}

})
