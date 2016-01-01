angular.module('dataghost-app').controller("bodyCtrl", ['$rootScope', bodyCtrlFunc]);

function bodyCtrlFunc($rootScope){
    var vm = this;
    console.log('in controller body');
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.bodyClass = toState;
    });
});
