angular.module('omdb',[])
	.factory('omdbApi', function($http, $q){

		// var movie={"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"N/A","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"342","imdbID":"tt0251413","Type":"game","Response":"True"};
		//var movieById= {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 38 wins & 28 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg","Metascore":"92","imdbRating":"8.7","imdbVotes":"875,151","imdbID":"tt0076759","Type":"movie","Response":"True"};
		var baseUrl='http://www.omdbapi.com/?v=1&';

		var searchMovie=function(query){
				var deferred=$q.defer();
				
				$http.get(baseUrl + 't=' + encodeURIComponent(query))
				 	.success(function(data){
				 			return deferred.resolve(data)
						});

				 	return deferred.promise;
			};

		var findById=function(id){
			var deferred=$q.defer();

			$http.get(baseUrl + 'i=' + id)
				.success(function(data){
					return deferred.resolve(data);
				}).error(function(){
					return deferred.reject('Error');
				});

			return deferred.promise;
		};

		return {
			search: searchMovie,
			find: findById
		};
	});