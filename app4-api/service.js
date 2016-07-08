angular.module('apiApp').service('apiSvc', ['$http','$q', function ($http, $q) {
	this.getAllPokemon = function (offset) {
		var limit = offset == 0  ? 'limit=181' : 'limit=180'
		var offset = '&offset=' + offset;

		var defer = $q.defer();
		$http({
			method: 'GET',
			url: 'http://pokeapi.co/api/v2/pokemon/?' + limit + offset
		}).then(function (response) {
			var results = response.data.results;
			defer.resolve(results);
		})
		return defer.promise;
	}

	// this.getAllPokemon = function () {
	// 	var deferred = $q.defer();
	// 	$http.get('http://pokeapi.co/api/v2/pokemon/?limit=721')
	// 	.then(function (response) {
	// 		// return response.data.results;
	// 	})
	// 	return defer.promise;
	// }



	this.getPokeInfo = function (apiURL) {
		return $http({
			method: 'GET',
			url: apiURL
		}).then(function (infoResponse) {
			return infoResponse;
		}) 
	}
}])


// sort by # not working
// neither is filter by #
// css with header and form
// loading icon like in weather app

// routes?