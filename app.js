var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope){
    $scope.name = "Severus Snape";
})

app.controller("ExercisesController", function($scope){
    $scope.FavColor = "Purple";
    $scope.secondsInACentury = (((24 * 60) * 60) * 365) * 100;
    $scope.rightNow = new Date
})
