var app = angular.module('ngApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.order = 'name';
    $scope.friends = [
        {name: 'John', phone: '555-1276'},
        {name: 'Mary', phone: '800-BIG-MARY'},
        {name: 'Mike', phone: '555-4321'},
        {name: 'Adam', phone: '555-5678'},
        {name: 'Julie', phone: '555-8765'}
    ];
    $scope.setOrder = function (order) {
        $scope.order = order;
    };
}]);