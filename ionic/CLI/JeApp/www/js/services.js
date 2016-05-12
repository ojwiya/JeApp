(function(){
  'use strict';

  angular.module('jeapp')
        .service('restaurantsService', [
        '$q',
        restaurantsService
  ]);

  function restaurantsService($q){
    var restaurants = [
      {
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
        },
        {
            "id": 42856,
            "name": "O' My Sushi",
            "Address": {
                "FirstLine": "21 Clerkenwell Road",
                "City": "London",
                "Postcode": "EC1M 5RD",
                "Latitude": 51.52251,
                "Longitude": -0.101674
            },
            "DefaultDisplayRank": 1,
            "SeoName": "omysushi-ec1m",
            "logoUrl": "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/42856.gif",
            "IsCollection": false,
            "IsDelivery": true,
            "cuisines": [
                {
                    "name": "Japanese",
                    "SeoName": "japanese"
                },
                {
                    "name": "Sushi",
                    "SeoName": "sushi"
                }
            ],
            "OpeningTime": "0001-01-01T00:00:00Z",
            "DriveDistance": 0.8,
            "DriveInfoCalculated": true,
            "DeliveryCost": 0,
            "MinimumDeliveryValue": 14,
            "IsNew": false,
            "ratingDetails": {
                "Count": 103,
                "StarRating": 5
            },
            "OfferPercent": 20
        },
        {
            "id": 52759,
            "name": "Wok Away @ Noodle Express",
            "Address": {
                "FirstLine": "6-7 Albemarle Way",
                "City": "London",
                "Postcode": "EC1V 4JB",
                "Latitude": 51.522824,
                "Longitude": -0.102785
            },
            "DefaultDisplayRank": 2,
            "SeoName": "wok-away--noodle-express-finsbury",
            "logoUrl": "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/52759.gif",
            "IsCollection": true,
            "IsDelivery": true,
            "cuisines": [
                {
                    "name": "Chinese",
                    "SeoName": "chinese"
                },
                {
                    "name": "Oriental",
                    "SeoName": "oriental"
                }
            ],
            "OpeningTime": "0001-01-01T00:00:00Z",
            "DriveDistance": 1.4,
            "DriveInfoCalculated": true,
            "DeliveryCost": 0,
            "MinimumDeliveryValue": 15,
            "IsNew": true,
            "ratingDetails": {
                "Count": 3,
                "StarRating": 6
            },
            "OfferPercent": 0
        },
        {
            "id": 52391,
            "name": "Hello Sushi @ N1 Grill",
            "Address": {
                "FirstLine": "6 Chapel Market",
                "City": "London",
                "Postcode": "N1 9EZ",
                "Latitude": 51.533552,
                "Longitude": -0.109981
            },
            "DefaultDisplayRank": 3,
            "SeoName": "hello-sushi-n1",
            "logoUrl": "http://d30v2pzvrfyzpo.cloudfront.net/uk/images/restaurants/52391.gif",
            "IsCollection": false,
            "IsDelivery": true,
            "cuisines": [
                {
                    "name": "Japanese",
                    "SeoName": "japanese"
                },
                {
                    "name": "Sushi",
                    "SeoName": "sushi"
                }
            ],
            "OpeningTime": "0001-01-01T00:00:00Z",
            "DriveDistance": 2,
            "DriveInfoCalculated": true,
            "DeliveryCost": 0,
            "MinimumDeliveryValue": 15,
            "IsNew": true,
            "ratingDetails": {
                "Count": 31,
                "StarRating": 5
            },
            "OfferPercent": 0
        }
  ];

    return {
      getRestaurants : function(outcode) {
        return $q.when(restaurants);
      }
    };
  }

})();
