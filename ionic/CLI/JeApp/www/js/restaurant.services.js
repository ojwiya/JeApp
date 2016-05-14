(function(){
  'use strict';

  angular.module('jeapp')
        .factory('restaurantsService', [
        '$http',
        restaurantsService
  ]);

  function restaurantsService($http){
    
    var _restaurants = [];
    
function saveRestaurants(restaurants){
    _restaurants = restaurants;
}
    function getRestaurant(id){
       var restaurant;
       angular.forEach(_restaurants, function(r, key) {
         
         if(r.id===parseInt(id)){
           restaurant =r;
         }
       });
       
       return restaurant;
    }
    
     function getRestaurants(outcode) {
        
        var url = 'http://jadaacouk00.eweb702.discountasp.net/jeapp/api/restaurants/'
  
           return $http.get(url + outcode)
        }
        
        return {
        getRestaurants : getRestaurants,
        getRestaurant : getRestaurant,
        saveRestaurants:saveRestaurants
      }
    
  }

})();
