angular.module('dataghost-app').controller("bodyCtrl", ['$rootScope', bodyCtrlFunc ] });

function bodyCtrlFunc($rootScope) {
  var vm = this;
  console.log('in controller body');
  vm.bodyClass = 'echoes';
}
