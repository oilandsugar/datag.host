angular.module('dataghost-app', ['ui.router']);

angular.module('dataghost-app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "dataghost-app/partials/home.html"
    })
    .state('visuals', {
      url: "/visuals",
      templateUrl: "dataghost-app/partials/visuals.html"
    })
    .state('sounds', {
      url: "/sounds",
      templateUrl: "dataghost-app/partials/sounds.html"
    })
    .state('echoes', {
      url: "/echoes",
      templateUrl: "dataghost-app/partials/echoes.html"
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "dataghost-app/partials/admin.html"
    });
});
