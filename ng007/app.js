var app = angular.module('ngApp', [])
    .directive('myComponent', function () {
        "use strict";
        return {
            scope: {
                isolatedAttributeFoo: '@attributeFoo',
                isolatedBindingFoo: '=bindingFoo',
                isolatedExpressionFoo: '&'
            },
            link: function (scope, iElement, iAttrs) {
                scope.$parent.$watch(iAttrs.nonIsoAttribute, function (newVal, oldVal, scope) {
                    scope.nonIsoAttribute = newVal;
                }, false);
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