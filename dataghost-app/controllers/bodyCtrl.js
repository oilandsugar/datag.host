angular.module('dataghost-app').controller("bodyCtrl", ['$rootScope', function(){
    var vm = this;
    console.log('in controller body');
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        vm.bodyClass = toState;
    });
    vm.bodyClass = 'index';
}]);
