(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("echoesCtrl", echoesCtrlFunc);

    function echoesCtrlFunc($twitterApi){
        var vm = this;
        console.log('in controller echoes');

        var clientId = '2JdDvmIM7SZuxy6tlzGrWDTuy'; // consumer key
        var clientSecret = 'x7k44xfTp7NySZLyJyOg9j0cjMHhe8TrefztzxhO2Ty9L1lFFA'; // consumer secret
        var myToken = '4321978402-gf4e0jZwUVM1MPQffVCvOUZVhTH512IAyVrutcK'; // access token
        var tokenSecret = 'YE3vhkV5BkrDwBLgQ2zCXpGdS530ImE9TtBZObuHMPTNO'; // token secret

        $twitterApi.configure(clientId, clientSecret, myToken);

        vm.showHomeTimeline = function() {
          $twitterApi.getHomeTimeline({count: 4}).then(function(data) {
            console.log(data);
            vm.home_timeline = data;
          }, function(error) {
            console.log('err: ' + error);
          });
        };

        vm.showHomeTimeline();

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
