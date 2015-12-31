angular.module('dataghost-app', ['ui.router']);

angular.module('dataghost-app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "dataghost-app/partials/home.html",
      controller: 'mainCtrl as main'
    })
    .state('visuals', {
      url: "/visuals",
      templateUrl: "dataghost-app/partials/visuals.html",
      controller: 'visualsCtrl as visuals'
    })
    .state('sounds', {
      url: "/sounds",
      templateUrl: "dataghost-app/partials/sounds.html",
      controller: 'soundsCtrl as sounds'
    })
    .state('echoes', {
      url: "/echoes",
      templateUrl: "dataghost-app/partials/echoes.html",
      controller: 'echoesCtrl as echoes'
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "dataghost-app/partials/admin.html",
      controller: 'adminCtrl as admin'
    });
});
