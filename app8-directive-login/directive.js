angular.module('attrDirective').directive('mySelect', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.on('click', function () {
                element[0].select();
            });
        }
    }
});