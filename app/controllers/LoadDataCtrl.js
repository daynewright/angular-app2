"use strict";

app.controller('LoadDataCtrl', ($scope, $q, MushroomStorage) => {
  let localMushrooms = [];

  let mushrooms = MushroomStorage()
    .then( (mushroomArray)=> {
      localMushrooms = mushroomArray;
      $scope.mushrooms = localMushrooms;
    });


  $scope.poisonousMushrooms = ()=> {
    $scope.mushrooms = localMushrooms.filter(e => !e.edible);
  };

  $scope.edibleMushrooms = ()=> {
    $scope.mushrooms = localMushrooms.filter(e => e.edible);
  };

});
