angular.module('movieApp')
	.controller('SearchController', function($location, $timeout){
		var vm=this;		
		var timeout;
		vm.search=function(query){
			if(query)
				$location.path('/results').search('q', query);
		};

		vm.keyup=function(query){
			timeout=$timeout(function(){
				vm.search(query)
			}, 10000);
		}
		

		vm.keydown=function(){
			$timeout.cancel(timeout);
		}
	});;