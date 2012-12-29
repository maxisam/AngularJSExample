var app = angular.module('ngApp', [])
    .directive('xngFocus', function () {
        return function (scope, element, attrs) {
            scope.$watch(attrs.xngFocus,
                function (newValue) {
                    newValue && element.focus();
                }, true);
        };
    });
app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.$watch('isChecked', function (newV) {
        newV && $('#name').focus();
    }, true);
}]);