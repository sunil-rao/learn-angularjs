angular.module('movieApp')
	.directive('movieResult', function(){
		return {

			restrict: 'E',
			replace: true,
			scope: {
				result: '='
			},
			template: '<div>{{result.Title}}</div>'
		};
	});