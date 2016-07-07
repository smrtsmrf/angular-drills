angular.module('app3').controller('app3Ctrl', ['$scope','svc3', function ($scope, svc3) {
	$scope.people = svc3.getData();


}])