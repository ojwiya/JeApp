(function(){
  'use strict';

  angular.module('jeapp')
        .factory('postcodeService', [
        '$http',
        postcodeService
  ]);

  function postcodeService($http){
      
 var getPostcode = function(lat,lon) {
   return $http.get('http://api.postcodes.io/postcodes?lon=' +lon + '&lat=' + lat)
      
    }
  
      return {
      getPostcode : getPostcode
    }
  
  }

})();
