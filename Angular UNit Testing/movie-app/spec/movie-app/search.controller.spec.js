describe('Search Controller', function(){

	var $scope={};
	var $location, searchController, $timeout;

	beforeEach(function(){

		angular.mock.module('movieApp');

		angular.mock.inject(function($controller, _$location_, _$timeout_){
			$location= _$location_;
			$timeout= _$timeout_;			
			/*var fn=function($scope, $location){
				$scope.search=function(query){
					//$location.url='';
					if(query)
						$location.path('/results').search('q', query);
				}
			}*/

			searchController=$controller('SearchController', {$location:$location, $timeout: $timeout});
		});

		
	});
	
	it('should redirect to the query results page for non-empty query', function(){
		searchController.search('star wars');
		expect($location.url()).toBe('/results?q=star%20wars');
	});

	it('should not redirect when empty query', function(){
		searchController.search();	
		expect($location.url()).toBe('');	
	});

	it('should not redirect after 1 sec of keyboard inactivity', function(){
		searchController.keyup('star wars');	
		$timeout.flush();
		expect($location.url()).toBe('/results?q=star%20wars');	
	});

	it('should cancel timeout on keydown', function(){
		searchController.keyup();

		searchController.keydown();

		expect($timeout.verifyNoPendingTasks).not.toThrow(); 
	});
});