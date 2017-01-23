(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileController',
        controllerAs: 'profile'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/signinform/signin.html',
        controller: 'signInController',
        controllerAs: 'sign'
      })
      .state('signout', {
        url: '/signout',
        templateUrl: 'app/signoutForm/signout.html',
        controller: 'signOutController',
        controllerAs: 'sign'
      })
      .state('forest', {
        url: '/forest',
        templateUrl: 'app/categoryForest/forest.html',
        controller: 'CateForestController',
        controllerAs: 'forest'
      })
      .state('mars', {
        url: '/mars',
        templateUrl: 'app/categoryMars/mars.html',
        controller: 'CateMarsController',
        controllerAs: 'mars'
      })

      .state('island', {
        url: '/island',
        templateUrl: 'app/categoryIsland/island.html',
        controller: 'CateIslandController',
        controllerAs: 'island'
      })
      .state('zombie', {
        url: '/zombie',
        templateUrl: 'app/categoryZombies/zombie.html',
        controller: 'CateZombieController',
        controllerAs: 'zombie'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
