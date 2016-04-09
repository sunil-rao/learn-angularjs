describe('Movie Result Directive', function(){
	var $compile, $rootScope;
	var result={
		Poster: 'http://localhost/image.jpg',
		Title: 'Star Wars'
	};

	beforeEach(function(){
		angular.mock.module('movieApp');
	});

	beforeEach(function(){
		angular.mock.inject(function(_$compile_, _$rootScope_){
			$compile=_$compile_;
			$rootScope=_$rootScope_;
		});
	});

	it('should out movie result html', function(){
		var html;
		$rootScope.result= result;
		html=$compile('<movie-result result="result"></movie-result>')($rootScope);
		$rootScope.$digest();
		expect(html.html()).toBe('Star Wars');
	});
});