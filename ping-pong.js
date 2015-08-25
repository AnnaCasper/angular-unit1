var app = angular.module('pingPong', []);

app.controller('PingPongController', function ($scope) {
  $scope.score1 = 0;
  $scope.score2 = 0;
  $scope.addScore1 = function (score) {
    $scope.score1 = score + 1
  };
  $scope.addScore2 = function (score) {
    $scope.score2 = score + 1
  };
  $scope.reset = function () {
    $scope.score1 = 0;
    $scope.score2 = 0;
  }
})
