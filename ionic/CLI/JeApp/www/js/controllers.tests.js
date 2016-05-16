describe('Controllers', function(){
    var _scope,_stateParams,_restaurantsService,_utilityService;

    // load the controller's module
    beforeEach(module('jeapp'));

    beforeEach(inject(function($rootScope, $controller,$stateParams,restaurantsService,utilityService) {
        _scope = $rootScope.$new();
        _stateParams = {postcode:'nw2 3tg'};
        _restaurantsService = restaurantsService;
        _utilityService =  utilityService;
        $controller('RestuarantsCtrl', {$scope: _scope,$statParams:_stateParams
        ,restaurantsService:_restaurantsService,utilityService:_utilityService});
    }));

    // tests start here
    it('should have enabled friends to be true', function(){
        expect(scope.restaurants.length).toBeGreaterEqual(0);
    });
});