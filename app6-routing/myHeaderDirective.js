angular.module('routingApp').directive('myHeader', [function () {
	return {
		restrict: 'E',
		templateUrl: 'myHeader.html',
		controller: function ($scope, $state) {
			$scope.page = $state.current.name;
		}
	};
}])