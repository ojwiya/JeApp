(function(){
  'use strict';

  angular.module('jeapp')
        .factory('postcodeService', [
        '$http',
        postcodeService
  ]);

  function postcodeService($http){
      
 var getPostcode = function(lat,lon) {
    $http.get('http://api.postcodes.io/postcodes?lon=' +lon + '&lat=' + lat)
      .success(function(data){
        return data;
      })
      .error(function(error){
        return error;
      });
    };
  
      return {
      getPostcode : getPostcode
    }
  
  }

})();
