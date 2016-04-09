describe('omdb service', function(){
	var movieData={"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"342","imdbID":"tt0251413","Type":"game","Response":"True"};
	var movieDataById={"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 38 wins & 28 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg","Metascore":"92","imdbRating":"8.7","imdbVotes":"875,151","imdbID":"tt0076759","Type":"movie","Response":"True"};
	var omdbApi={};
	var $httpBackend;

	beforeEach(function(){
		module('omdb');

		inject(function(_omdbApi_,  _$httpBackend_){
			omdbApi=_omdbApi_;
			$httpBackend=_$httpBackend_;
		});
	});

	it('should return search movie data', function(){
		

		/*angular.mock.module({
			'omdbApi':{
				search: function(query){
					return movieData;
				}
			}
		});*/

		/*angular.mock.module(function($provide){
			$provide.factory('omdbApi', function(){
				return {
					search: function(query){
						return movieData;
					}
				}
			})
		});*/
		var response;
		$httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&t=star%20wars')
			.respond(200, movieData);



		omdbApi.search('star wars').then(function(data){
			response=data;
		});

		$httpBackend.flush();

		expect(response).toEqual(movieData);
	});

	it('should find by id', function(){

		var response;
		$httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&i=tt0076759')
			.respond(200, movieDataById);



		omdbApi.find('tt0076759').then(function(data){
			response=data;
		});

		$httpBackend.flush();


		expect(response).toEqual(movieDataById);
	});

	it('should throw error', function(){
		var response;
		$httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&i=tt0076759')
					.respond(500);

		omdbApi.find('tt0076759').then(function(data){
			response=data;
		}).catch(function(errorResponse){
			response=errorResponse;
		});			

		$httpBackend.flush();

		expect(response).toEqual('Error');
	});
});