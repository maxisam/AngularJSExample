var app = angular.module('ngApp', []);
app.directive('xngPlaceholder', function () {
    'use strict';
    return {
        restrict: 'A',
        link: function (scope, iElement, iAttrs) {
            scope.$watch(iAttrs.xngPlaceholder, function (newVal) {
                iElement.removeAttr('placeholder'); // remove existing placeholder
                var att = '';
                angular.forEach(newVal, function (elm, key) {
                    att += elm ? (key + ' ') : '';
                });
                iElement.attr('placeholder', att);
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
