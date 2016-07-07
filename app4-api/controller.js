angular.module('apiApp').controller('apiCtrl', ['$scope', 'apiSvc', function ($scope, apiSvc) {

	$scope.getPokemon = function () {
		apiSvc.getAllPokemon().then(function(pokemon) {
			$scope.pokemon = pokemon;
		})
	}
	$scope.getPokemon();


	$scope.getPokeInfo = function (pokemonInfo) {
		apiSvc.getPokeInfo(pokemonInfo).then(function(response) {
			$scope.pokemonInfo = response.data;
			console.log($scope.pokemonInfo);
		})
	}

	$scope.gridOptions = { 
	      enableColumnResize: true,
	      data: 'pokemon',
	      // filterOptions: $scope.filterOptions,
	      // filterOptions: {filterText: '', useExternalFilter: false},
	      // showFilter: true,
	      height: '110px',
	      // sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type', 'Genre', 'TrackPrice', 'CollectionPrice', 'Explicit'], directions: ['asc']},
	      columnDefs: [
	        {field: 'name', displayName: 'Name'},
	        {field: 'url', displayName: 'API url'},
	      ]
  };

	
	
}])




// ng-grid like itunes to display
