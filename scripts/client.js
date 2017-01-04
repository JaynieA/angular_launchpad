//Create an app
var app = angular.module('app', []);
//Create a controller
app.controller('LaunchpadController', ['$scope', function($scope) {
  console.log('NG');
  //store all animals
  $scope.allAnimals = [];
  //get and display all animals
  $scope.addAnimal = function() {
    console.log('in getAnimal');
    var animalObject = {
      type: $scope.animalIn,
      age: $scope.ageIn
    }; // end animalObject
    $scope.allAnimals.push(animalObject);
  }; // end getAnimal
}]); //end app controller
