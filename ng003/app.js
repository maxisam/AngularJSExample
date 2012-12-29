var app = angular.module('ngApp', []);
app.directive('ngPlaceholder', function ($parse) {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(attrs.ngPlaceholder, function (newVal, oldVal, scope) {
                element.removeAttr('placeholder');
                var att = '';
                angular.forEach(newVal, function (elm, key) {
                    att += elm ? (key + ' ') : '';
                });
                element.attr('placeholder', att);
            }, true);
        }
    };
});
app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.submit = function () {
        alert($scope.partnerName);
    };
}]);