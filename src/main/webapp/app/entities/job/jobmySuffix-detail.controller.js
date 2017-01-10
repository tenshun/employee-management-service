(function() {
    'use strict';

    angular
        .module('employeeManagementServiceApp')
        .controller('JobMySuffixDetailController', JobMySuffixDetailController);

    JobMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Job', 'Employee', 'Task'];

    function JobMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Job, Employee, Task) {
        var vm = this;

        vm.job = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('employeeManagementServiceApp:jobUpdate', function(event, result) {
            vm.job = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
