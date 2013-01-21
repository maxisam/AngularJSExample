var app = angular.module('ngApp', []);
app.service('syncSRV', function ($rootScope) {
    "use strict";
    this.sync = function (data) {
        this.syncData = data;
        $rootScope.$broadcast('updated');
    };
});
app.controller('MainCtrl1', ['$scope', function ($scope) {
    }])
    .controller('MainCtrl2', ['$scope', function ($scope) {
    }]);
app.directive('sync',function (syncSRV) {
    "use strict";
    return {
        template: '<div><input ng-model="syncdata" type="text" /></div> ',
        controller: function ($scope, $element, $attrs) {
            $scope.$watch('syncdata', function (newVal, oldVal, $scope) {
                syncSRV.sync(newVal);
            }, true);
        }
    };
}).directive('dataview', function (syncSRV) {
    "use strict";
    return {
        template: '<div>Sync data : {{data}}</div> ',
        controller: function ($scope, $element, $attrs) {
            $scope.$on('updated', function () {
                $scope.data = syncSRV.syncData;
            });
        }
    };
});
