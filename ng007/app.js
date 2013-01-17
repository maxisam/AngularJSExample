var app = angular.module('ngApp', [])
    .directive('myComponent', function () {
        return {
            scope: {
                isolatedAttributeFoo: '@attributeFoo',
                isolatedBindingFoo: '=bindingFoo',
                isolatedExpressionFoo: '&'
            }
        };
    });

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.foo = 'Hello!';
    $scope.updateFoo = function (newFoo) {
        $scope.foo = newFoo;
    };
}]);