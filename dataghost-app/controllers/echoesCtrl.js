(function () {
    'use strict';

    angular
        .module('dataghost-app')
        .controller("echoesCtrl", [ "$twitterApi", echoesCtrlFunc ]);

    function echoesCtrlFunc($twitterApi){
        var vm = this;
        console.log('in controller echoes');

        var twitterKey = 'STORAGE.TWITTER.KEY';
        var clientId = '6aX0qCOrG3CXgragf7taQMivr';
        var clientSecret = 'fuJ0h7SvNkmLhfDbHRKpxT3CjdhYK4q6FXHr3FoiPCcSRzRHkI';
        var myToken = '';

        vm.tweet = {};

        $ionicPlatform.ready(function() {
          myToken = JSON.parse(window.localStorage.getItem(twitterKey));
          if (myToken === '' || myToken === null) {
            $cordovaOauth.twitter(clientId, clientSecret).then(function (succ) {
              myToken = succ;
              window.localStorage.setItem(twitterKey, JSON.stringify(succ));
              $twitterApi.configure(clientId, clientSecret, succ);
              vm.showHomeTimeline();
            }, function(error) {
              console.log(error);
            });
          } else {
            $twitterApi.configure(clientId, clientSecret, myToken);
            vm.showHomeTimeline();
          }
        });

        vm.showHomeTimeline = function() {
          $twitterApi.getHomeTimeline().then(function(data) {
            vm.home_timeline = data;
          });
        };

        vm.doRefresh = function() {
          vm.showHomeTimeline();
          vm.$broadcast('scroll.refreshComplete');
        };

        vm.correctTimestring = function(string) {
          return new Date(Date.parse(string));
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
