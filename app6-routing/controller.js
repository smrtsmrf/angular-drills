angular.module('routingApp').controller('controller', ['$scope', '$state', function ($scope, $state) {
	$scope.$state = $state;
}])