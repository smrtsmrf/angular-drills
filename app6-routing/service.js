angular.module('routingApp').service('service', function ($http) {
	
	var api_key = '?api_key=nC4wJ9Y4y11eESX5j3D7KIKdvaphkUVWM4LbbRyM';

	this.getAPOD = function (date) {
		if (!date) date = '';
		var baseUrl = 'https://api.nasa.gov/planetary/apod'
		return $http.get(baseUrl + api_key + '&date=' + date)
			.then(function (response) {
				return response.data;
		})
	}
})
