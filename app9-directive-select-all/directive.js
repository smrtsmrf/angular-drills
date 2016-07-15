angular.module('attrDir').directive('mySelect', [function () {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			iElement.on('click', function () {
				iElement[0].select()
			})
		}
	};
}])