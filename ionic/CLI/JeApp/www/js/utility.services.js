(function(){
  'use strict';

  angular.module('jeapp')
        .factory('utilityService', 
           utilityService
  );

  function utilityService(){
   
    return {
        convertNumberToArray: function(num) {
            if(num){
            return new Array(Math.round(num));  
            }
            
            return []; 
          }
    };
  }

})();
