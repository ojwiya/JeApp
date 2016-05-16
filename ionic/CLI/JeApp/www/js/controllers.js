(function(){
  'use strict';
  
angular.module('jeapp')

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('RestaurantsCtrl',function($scope,$stateParams,restaurantsService,utilityService) {
  $scope.postcode = $stateParams.postcode;
  $scope.getRestaurants = getRestaurants;
  $scope.convertNumberToArray =  utilityService.convertNumberToArray;
  
  
  $scope.getRatingsSummary = function(rating) {
    if(rating){
        return Math.round(parseInt(rating)/3);
     } else{
        return 0;       
    }
  };
  
    
  $scope.restaurants = [];

  function getRestaurants(){
     if($scope.postcode){  

       restaurantsService
          .getRestaurants($scope.postcode)
            .success(function(data){
              $scope.restaurants = data.restaurants;
              restaurantsService.saveRestaurants($scope.restaurants);
            })
            .error(function(error){
              console.debug('There was an error retrieving the restaurants:' + error);
            });
     }
    }

  getRestaurants();

})

.controller('RestaurantCtrl', function($scope, $stateParams,restaurantsService,utilityService) {
    var restaurantId = ($stateParams.restaurantId  || "");
    $scope.restaurant =  restaurantsService.getRestaurant(restaurantId);
})

.controller('SearchCtrl', function($scope, $state,$location,gpsService,postcodeService) {
    
    $scope.matchingAddresses = [];
    $scope.searchForm = {postcode:'nw3 2tg'};
    
    $scope.manualSearch= manualSearch;
    $scope.gpsSearch=gpsSearch;
    
    function manualSearch(){
       search($scope.searchForm.postcode);
    }
          
    function gpsSearch(){
        gpsService.getGPS()
        .then(function (position) {
          var lat  = position.coords.latitude
          var lon = position.coords.longitude
          getAddresses(lat,lon);
        }, function(err) {
          // error
        });
    }
    
    function getAddresses(lat,lon){
       postcodeService
       .getPostcode(lat,lon)
          .then(function(matchingAddresses){
              $scope.matchingAddresses= matchingAddresses.data.result;
              $scope.searchForm.postcode = getNearestGpsPostcode($scope.matchingAddresses);
              search($scope.searchForm.postcode);
          })
          .catch(function(error){
              console.error('There was an error retrieving addresses: ', error);
          })
    }
    
    function getNearestGpsPostcode(postcodes){
         return postcodes[0].postcode;
    }
    
    function search(postcode){
       if(postcode){
            $state.go('app.restaurants',{postcode:postcode});
       }
    }
    
});

})();