angular.module('routingApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider, $stateParams) {
	
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'home.html', 
		controller: function ($stateParams) {
			
		}
	})

	.state('signup', {
		url: '/signup',
		templateUrl: 'signup.html',
		resolve: {
			picData: function (service) {
				return service.getAPOD().then(function (results) {
					return results;
				});
			}
		},
		controller: function ($scope, picData, service) {

			$scope.do = function ($event) {
				$event.preventDefault();
			}
			$scope.data = picData;

			$scope.getAPOD = function (date) {

				switch (date) {
					case 'yest':
						dateArg = moment(moment().subtract(1,'days')).format('YYYY-MM-DD');
						break;
					case 'other':
						dateArg = moment($scope.otherDate).format('YYYY-MM-DD');
						break
					default:
						dateArg = '';
						break;
				}

				service.getAPOD(dateArg).then(function (results) {
					$scope.data = results;
				})
			}
		}
	})

	.state('details', {
		url: '/details', 
		templateUrl: 'details.html', 
		resolve: {
			picData: function (service) {
				return service.getAPOD().then(function (results) {
					return results;
				});
			}
		},
		controller: function ($scope, picData, service) {

			$scope.do = function ($event) {
				$event.preventDefault();
			}
			$scope.data = picData;

			$scope.getAPOD = function (date) {

				switch (date) {
					case 'yest':
						dateArg = moment(moment().subtract(1,'days')).format('YYYY-MM-DD');
						break;
					case 'other':
						dateArg = moment($scope.otherDate).format('YYYY-MM-DD');
						break
					default:
						dateArg = '';
						break;
				}

				service.getAPOD(dateArg).then(function (results) {
					$scope.data = results;
				})
			}
		}
	})


	$urlRouterProvider.otherwise('/')
}])

