(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("echoesCtrl", [ "$twitterApi", echoesCtrlFunc ]);

    function echoesCtrlFunc($twitterApi){
        var vm = this;
        console.log('in controller echoes');

        var clientId = '6aX0qCOrG3CXgragf7taQMivr';
        var clientSecret = 'fuJ0h7SvNkmLhfDbHRKpxT3CjdhYK4q6FXHr3FoiPCcSRzRHkI';
        var myToken = '571281656-CGghD8oKpMEYFWgXFvOqwbO5GP4EaYijzBFckU2j';

        $twitterApi.configure(clientId, clientSecret, myToken);

        vm.showHomeTimeline = function() {
          $twitterApi.getHomeTimeline({count: 4}).then(function(data) {
            console.log(data);
            vm.home_timeline = data;
          }, function(error) {
            console.log('err: ' + error);
          });
        };

        vm.echoes = [
          {
            ID: 1,
            text: "A ghost made out of data, persistent data, independent from it's source.",
          },
          {
            ID: 2,
            text: "An empty dataset, visible, but intangible.",
          },
          {
            ID: 3,
            text: "function ghosting(){ return NULL }",
          },
          {
            ID: 4,
            text: "last one",
          }
        ];
    };

})();
