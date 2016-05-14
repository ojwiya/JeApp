(function(){
  'use strict';

  angular.module('jeapp')
        .factory('gpsService', [
        '$cordovaGeolocation',
        gpsService
  ]);

  function gpsService($cordovaGeolocation){
   
    return {
      getGPS : function() {
         var posOptions = {timeout: 10000, enableHighAccuracy: false};
          return $cordovaGeolocation
            .getCurrentPosition(posOptions);
      }
    };
  }

})();
