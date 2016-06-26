angular.module('purlB', ['ui.router'])

.config(function($stateProvider, $httpProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'app/views/yarn.html',
      // controller: 'yarnCtrl'
    });

});