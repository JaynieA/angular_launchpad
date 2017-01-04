//Create an app
var app = angular.module('app', []);
//Create a controller
app.controller('LaunchpadController', ['$scope', function($scope) {
  //store all animal objects
  $scope.allAnimals = [];
  //get and display all animals
  $scope.addAnimal = function() {
    console.log('in getAnimal');
    //make animal object
    var animalObject = {
      type: $scope.speciesIn,
      name: $scope.nameIn,
      age: $scope.ageIn
    }; // end animalObject
    $scope.allAnimals.push(animalObject);
  }; // end getAnimal

  //Set booleans for hide/show
  $scope.isPopulated = function(value) {
    if (value !== undefined) {
      return true;
    } else {
      return false;
    } // end else
  }; // end isPopulated

  console.log($scope.animalList);
}]); //end app controller
