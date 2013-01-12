var app = angular.module('ngApp', [])
    .directive('xngFocus', function () {
        "use strict";
        return function (scope, element, iattrs) {
            scope.$watch(iattrs.xngFocus,
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