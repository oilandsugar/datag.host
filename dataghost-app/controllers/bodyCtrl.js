(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("bodyCtrl", ['$rootScope', bodyCtrlFunc]);

    function bodyCtrlFunc($rootScope){
        var vm = this;
        console.log('in controller body');
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.bodyClass = toState.name;
        });

        vm.getClass = function() {
          return $rootScope.bodyClass;
        };

        vm.lightOrDark = function() {
          if($rootScope.bodyClass == 'visuals') {
            return 'light';
          } else {
            return 'dark';
          }
        };

    };

  })();
