(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("indexCtrl", ['mainVisuals', indexCtrlFunc]);

    function indexCtrlFunc(mainVisuals){
        var vm = this;
        console.log('in controller index');

        vm.main_visuals = mainVisuals.main_visuals;
        vm.isCurrentSlideIndex = function(index){
          return mainVisuals.isCurrentSlideIndex(index);
        };
        vm.setCurrentSlideIndex = function(index){
          return mainVisuals.setCurrentSlideIndex(index);
        };
    };

})();
