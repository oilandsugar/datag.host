(function () {
    'use strict';

    angular
      .module('dataghost-app')
      .service('mainVisuals', function() {
        var vm = this;
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

        vm.currentIndex = 0;

        vm.setCurrentSlideIndex = function (index) {
            vm.currentIndex = index;
        };

        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex === index;
        };
      });

})();
