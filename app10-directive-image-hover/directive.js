angular.module('imgDir').directive('myImg', [function () {
	return {
		restrict: 'E',
		scope: {
			src: '@imgSrc'
		},
		replace: false,
		template: '<img src={{src}}>',
		link: function (scope, el, attrs ) {
			el.on('mouseenter', function () {
				el.css('opacity', '0.5')
			})
			.on('mouseleave', function () {
				el.css('opacity', '1')
			})
		}
	}
}]);


// for some reason, replace: true leaves the img-src on
// there. still works, but I don't know why it's not replacing



