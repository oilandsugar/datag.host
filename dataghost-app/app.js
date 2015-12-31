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
      controller: 'mainCtrl as mai'
    })
    .state('visuals', {
      url: "/visuals",
      templateUrl: "dataghost-app/partials/visuals.html",
      controller: 'visualsCtrl as vis'
    })
    .state('sounds', {
      url: "/sounds",
      templateUrl: "dataghost-app/partials/sounds.html",
      controller: 'soundsCtrl as sou'
    })
    .state('echoes', {
      url: "/echoes",
      templateUrl: "dataghost-app/partials/echoes.html",
      controller: 'echoesCtrl as ech'
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "dataghost-app/partials/admin.html",
      controller: 'adminCtrl as adm'
    });
});

angular.module('dataghost-app').run(function($rootScope) {
   $rootScope.$on('$routeChangeSuccess', function(ev,data) {
     if (data.$route && data.$route.controller)
       $rootScope.controller = data.$route.controller;
   })
});
