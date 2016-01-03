(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("indexCtrl", indexCtrlFunc);

    function indexCtrlFunc(){
        var vm = this;
        console.log('in controller index');
        vm.main_visuals = [
          {
            ID: 1,
            url: "../datag.host/dataghost-app/assets/img/back-logo-sound.jpg"
          },
          {
            ID: 2,
            url: "../datag.host/dataghost-app/assets/img/back-glitch-1.jpg"
          },
          {
            ID: 3,
            url: "../datag.host/dataghost-app/assets/img/back-lines.jpg"
          },
          {
            ID: 4,
            url: "../datag.host/dataghost-app/assets/img/back-shift.jpg"
          }
        ];
    };

})();
