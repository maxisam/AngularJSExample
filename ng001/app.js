var app = angular.module('myApp', [])
    .factory('CurrentUserService', function () {
        "use strict";
        var user = {
            avatarUrl: ''
        }, srv = {};
        srv.getCurrentUser = function () {
            return user;
        };

        return srv;
    }).directive('myAvatar', function () {
        "use strict";
        return {
            restrict: 'A',
            replace: true,
            template: '<img class="avatar" ng-src="{{url}}" alt="{{url}}" title="{{url}}"> ',
            controller: function ($scope, CurrentUserService) {
                $scope.url = CurrentUserService.getCurrentUser().avatarUrl;
            }
        };
    });

app.controller('MainCtrl', ['$scope', 'CurrentUserService', function ($scope, CurrentUserService) {
    "use strict";
    CurrentUserService.getCurrentUser().avatarUrl = $scope.url;
}]);