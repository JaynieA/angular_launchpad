//Create an app
var app = angular.module('app', []);
//Create a controller
app.controller('LaunchpadController', ['$scope', function($scope) {
  console.log('NG');
  $scope.allAnimals = [];
  $scope.addAnimal = function() {
    console.log('in getAnimal', $scope.animalIn);
    $scope.allAnimals.push($scope.animalIn);
    console.log($scope.allAnimals);
  }; // end getAnimal
}]); //end app controller
