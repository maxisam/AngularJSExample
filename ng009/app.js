var app = angular.module('ngApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
    'use strict';
    $scope.smartphones = [
        {brand: 'Apple', model: 'iPhone 4S', price: '999'},
        {brand: 'Samsung', model: 'SIII', price: '888' },
        {brand: 'LG', model: 'Optimus', price: '777'},
        {brand: 'htc', model: 'Desire', price: '666'},
        {brand: 'Nokia', model: 'N9', price: '555'}
    ];
    $scope.search = function (row) {
        return !!((row.brand.indexOf($scope.query || '') !== -1 || row.model.indexOf($scope.query || '') !== -1));
    };
}]);