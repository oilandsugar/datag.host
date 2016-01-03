(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("soundsCtrl", soundsCtrlFunc);

    function soundsCtrlFunc(){
        var vm = this;
        console.log('in controller sounds');

        vm.options = {
          waveColor: '#606060',
          progressColor: '#787A7A',
          backend: 'MediaElement',
          barWidth: 3,
          cursorColor: '#ffffff',
          height: 160
        };

        vm.url = '../assets/audio/orb-crs-3.mp3';

        vm.sounds = [
          {
            name: 'projet 1',
            date: '2015 01 02',
            duration: "25 minutes",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
            type: 'video'
          }
        ];
    };

})();
