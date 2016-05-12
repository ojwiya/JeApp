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

.controller('RestaurantsCtrl',['$scope','restaurantsService',function($scope,restaurantsService) {
  var outcode = '';
  
  $scope.getRatingsSummary = function(rating) {
    if(rating){
        return Math.round(parseInt(rating)/5);
     } else{
        return 0;       
    }

  };
  
  $scope.restaurants = [{
            "id": 11245,
            "name": "Barbican Express Pizza",
            "Address": {
                "FirstLine": "131 Whitecross Street",
                "City": "London",
                "Postcode": "EC1Y 8JL",
                "Latitude": 51.5233,
                "Longitude": -0.093295
            },
            "DefaultDisplayRank": 0,
            "SeoName": "barbicanexpresspizza",
            "logoUrl": "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/11245.gif",
            "IsCollection": true,
            "IsDelivery": true,
            "cuisines": [
                {
                    "name": "Italian",
                    "SeoName": "italian"
                },
                {
                    "name": "Pizza",
                    "SeoName": "pizza"
                }
            ],
            "OpeningTime": "0001-01-01T00:00:00Z",
            "DriveDistance": 1.2,
            "DriveInfoCalculated": true,
            "DeliveryCost": 0,
            "MinimumDeliveryValue": 10,
            "IsNew": false,
            "ratingDetails": {
                "Count": 512,
                "StarRating": 5
            },
            "OfferPercent": 0
        }];

  restaurantsService
      .getRestaurants(outcode)
      .then(function(restaurants) {
        $scope.restaurants = [].concat(restaurants);
      });
      
 
}])

.controller('RestaurantCtrl', function($scope, $stateParams) {
    
});

})();