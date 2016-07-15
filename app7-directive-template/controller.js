angular.module('elementDirective').controller('controller', ['$scope', function ($scope) {
	$scope.login = function () {
		alert('login successful')
	}
}])