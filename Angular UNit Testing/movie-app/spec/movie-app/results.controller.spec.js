describe('Results controller', function(){
	var $scope, $controller, resultController, movieResults, omdbApi, q, rootScope, location, $exceptionHandler;
	movieResults={"Title":"Pleasure (And Its Little Inconveniences)","Year":"1998","Rated":"N/A","Released":"01 Jan 1998","Runtime":"100 min","Genre":"Drama","Director":"Nicolas Boukhrief","Writer":"Nicolas Boukhrief, Dan Sasson","Actors":"Mathieu Kassovitz, Vincent Cassel, Julie Gayet, Foued Nassah","Plot":"Seemingly unrelated events connect several people: a young wounded soldier, a nurse, a failed comedian, and a murderer.","Language":"French","Country":"France, Italy, Luxembourg","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTIzMDYwMzM5NV5BMl5BanBnXkFtZTYwMjU1OTg4._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.9","imdbVotes":"211","imdbID":"tt0166308","Type":"movie","Response":"True"};
	// $scope={};


	beforeEach(function(){
		angular.mock.module(function($exceptionHandlerProvider){
			$exceptionHandlerProvider.mode('log');
		});
	});

	beforeEach(function(){
		angular.mock.module('movieApp');
		angular.mock.module('omdb');

		angular.mock.inject(function(_$controller_, $location, _omdbApi_, $q, $rootScope, _$exceptionHandler_){
				omdbApi=_omdbApi_;
				q=$q;
				rootScope=$rootScope;
				$controller=_$controller_;	
				location=$location;	
				$scope=rootScope.$new();		
				$exceptionHandler=_$exceptionHandler_;	
		});
	});


	it('should load results', function(){

		location.search('q', 'its');
		spyOn(omdbApi, 'search').and.callFake(function(){
			var deferred=q.defer();

			deferred.resolve(movieResults);

			return deferred.promise;
		});

		resultController=$controller('ResultsController', {$scope: $scope, $location: location, omdbApi: omdbApi});

		rootScope.$apply();
		expect($scope.results.Title).toBe(movieResults.Title);
		expect(omdbApi.search).toHaveBeenCalledWith('its');
	});

	it('should handle errors', function(){
		spyOn(omdbApi, 'search').and.callFake(function(){
			var deferred=q.defer();

			deferred.reject('Error');

			return deferred.promise;
		});

		$controller('ResultsController', {$scope: $scope, $location: location, omdbApi: omdbApi});

		$scope.$apply();

		expect($exceptionHandler.errors[0]).toEqual('Error');
	});

});