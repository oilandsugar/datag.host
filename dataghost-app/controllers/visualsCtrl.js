(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("visualsCtrl", visualsCtrlFunc);

    function visualsCtrlFunc(){
        var vm = this;
        console.log('in controller visuals');
        vm.visuals = [
          {
            ID: 1,
            url: "../datag.host/dataghost-app/assets/img/absenceofnoise-10.png"
          },
          {
            ID: 2,
            url: "../datag.host/dataghost-app/assets/img/merger.png"
          },
          {
            ID: 3,
            url: "../datag.host/dataghost-app/assets/img/flyer.jpg"
          },
          {
            ID: 4,
            url: "../datag.host/dataghost-app/assets/img/dataset.svg"
          }
        ];
    });

})();
