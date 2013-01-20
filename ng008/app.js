var app = angular.module('ngApp', [])
    .directive('myDir', function () {
        "use strict";
        return {
            scope: true,
            template: '<div>observe-textinput: {{observe1}}</div><div>observe-valinput: {{observe2}}</div><div>eval: {{evalVal}}</div><div>eval2: {{evalVal2}}</div><div>watch: {{watchVal}}</div>',
            link: function (scope, iElement, iAttrs) {
                iAttrs.$observe('textinput', function (value) {
                    scope.observe1 = value;
                });
                iAttrs.$observe('valinput', function (value) {
                    scope.observe2 = value;
                });
                scope.$watch(iAttrs.textinput, function (newVal, oldVal, scope) {
                    scope.evalVal = scope.$eval(iAttrs.textinput);
                    scope.evalVal2 = scope.$eval('xinput');
                    scope.watchVal = newVal;
                }, false);
            }
        };
    });

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.xinput = 'test';
}]);