'use strict';

app.factory('MushroomStorage', ($q, $http)=> {

  let getMushrooms = ()=> {
    return $q( (resolve, reject)=> {
        $http.get('./app/data/mushrooms.json')
        .success((results)=> {
          resolve(results);
        })
        .error((error)=>{
          reject(error);
        });
    });
  };

  let getMushroomsAry = ()=> {
    return $q( (resolve, reject)=> {
      let mushroomArray = [];
      getMushrooms()
      .then((data)=>{
        data.mushrooms.forEach(function(e,i){
          let mushroomName = Object.keys(e)[0];
          data.mushrooms[i][mushroomName].name = mushroomName;
         mushroomArray.push(data.mushrooms[i][mushroomName]);
        });
      });
      resolve(mushroomArray);
    });
  };

return getMushroomsAry;

});
