var app = angular.module('ngApp', [])
    .directive('snippet', ['$timeout', '$interpolate', function ($timeout, $interpolate) {
        "use strict";
        return {
            restrict: 'E',
            template: '<pre><code ng-transclude></code></pre>',
            replace: true,
            transclude: true,
            link: function (scope, elm) {
                var tmp = $interpolate(elm.find('code').text())(scope);
                elm.find('code').html(hljs.highlightAuto(tmp).value);
            }
        };
    }]);

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.cdnPath = "//path/to/cdn/";
    $scope.version = "1.0";
}]);

