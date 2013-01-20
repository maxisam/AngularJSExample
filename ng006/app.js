var app = angular.module('ngApp', [])
    .directive('xngWatcher', function () {
        "use strict";
        return {
            template: '<span>X:{{x1}}, Y:{{y1}}</span>',
            link: function (scope, elm, iAttrs) {
                scope.$watch(function () {
                    return {x: iAttrs.x, y: iAttrs.y};
                }, function (newVal, oldVal, scope) {
                    console.log('change !');
                    scope.x1 = newVal.x;
                    scope.y1 = newVal.y;
                }, true);
            }
        };
    });

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
}]);