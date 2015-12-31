angular.module('dataghost-app').controller("echoesCtrl", function(){
    var vm = this;
    console.log('in controller echoes');
    vm.bodyClass = 'echoes';
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
});
