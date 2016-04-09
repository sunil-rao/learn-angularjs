describe('MovieCore', function(){
	
	var PopularMovies, $httpBackend;

	beforeEach(function(){
		angular.mock.module('movieCore');

		angular.mock.inject(function(_PopularMovies_, _$httpBackend_){
			PopularMovies=_PopularMovies_;
			$httpBackend=_$httpBackend_;
		});	
	});

	afterEach(function(){
		$httpBackend.verifyNoOutstandingExpectation();
	});
	
	it('should create popular movies', function(){

		$httpBackend.expectPOST('popular', function(data){
			return angular.fromJson(data).movieId==='tt076759';
		})
		.respond(201);

		var popularMovies=new PopularMovies({
			movieId: 'tt076759',
			decription: 'Great Movie!'
		});

		popularMovies.$save();

		expect($httpBackend.flush).not.toThrow();
	});

	it('should find by id', function(){

		$httpBackend.expectGET('popular/tt076759').respond(200);

		PopularMovies.get({movieId: 'tt076759'});

		expect($httpBackend.flush).not.toThrow();
	});

	it('should update', function(){

		$httpBackend.expectPUT('popular').respond(200);

		var popularMovies=new PopularMovies({movieId: 'tt076759', decription: 'Hello'});

		popularMovies.$update();

		expect($httpBackend.flush).not.toThrow();
	});
});