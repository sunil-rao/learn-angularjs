angular.module('movieApp')
.controller('ResultsController', function($scope, $location, $exceptionHandler, omdbApi){

	// var movieResults={"Title":"Pleasure (And Its Little Inconveniences)","Year":"1998","Rated":"N/A","Released":"01 Jan 1998","Runtime":"100 min","Genre":"Drama","Director":"Nicolas Boukhrief","Writer":"Nicolas Boukhrief, Dan Sasson","Actors":"Mathieu Kassovitz, Vincent Cassel, Julie Gayet, Foued Nassah","Plot":"Seemingly unrelated events connect several people: a young wounded soldier, a nurse, a failed comedian, and a murderer.","Language":"French","Country":"France, Italy, Luxembourg","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTIzMDYwMzM5NV5BMl5BanBnXkFtZTYwMjU1OTg4._V1_SX300.jpg","Metascore":"N/A","imdbRating":"4.9","imdbVotes":"211","imdbID":"tt0166308","Type":"movie","Response":"True"};
	var query=$location.search().q;
	omdbApi.search(query).then(function(data){
		$scope.results=data;	
	})
	.catch(function(e){
		$exceptionHandler(e);
	});
	// $scope.results=movieResults;
});