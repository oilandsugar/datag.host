angular.module('dataghost-app').controller("bodyCtrl", ['$rootScope', bodyCtrl ] });

function bodyCtrl($rootScope) {
  var vm = this;
  console.log('in controller body');
  vm.bodyClass = 'echoes';
}
