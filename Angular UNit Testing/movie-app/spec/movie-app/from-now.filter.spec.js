describe('From Now Filter', function(){
	var fromNow;

	beforeEach(function(){

		angular.mock.module('movieApp');
		angular.mock.inject(function($filter){
			fromNow=$filter('fromNow');
		});

	});

	it('should return error for undefined', function(){
		expect(fromNow).toThrow('date value cannot be undefined');
	});


	it('should return same value for invalid date', function(){
		var data=fromNow('foo');

		expect(data).toBe('foo');
	});

	
});