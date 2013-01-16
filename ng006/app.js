var app = angular.module('ngApp', [])
    .directive('xngWatcher', function () {
        "use strict";
        return {
            template: '<span>X:{{x}}, Y:{{y}}</span>',
            link: function (scope, elm, iAttrs) {
                scope.$watch(function () {
                    return {x: iAttrs.x, y: iAttrs.y};
                }, function (newVal, oldVal, scope) {
                    console.log('change !');
                    scope.x = newVal.x;
                    scope.y = newVal.y;
                }, false);
            }
        };
    });

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
}]);