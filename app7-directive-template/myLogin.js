angular.module('elementDirective').directive('myLogin', [function () {
	return {
		restrict: 'E',
		templateUrl: 'login.html',
		controller: 'controller'
	};
}])