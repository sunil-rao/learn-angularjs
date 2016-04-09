angular.module('movieApp')
.filter('fromNow', function(){

	return function(data){
		var date;
		if(!data)
			throw 'date value cannot be undefined'	;

		else if(typeof(data)==='string'){
			date=new Date(data);
		}

		if(isNaN(date.getTime())){
			return data;
		}

		return date;
	};
}) ;