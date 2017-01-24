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
      .state('categories', {
        url: '/categories/:cate',
        templateUrl: 'app/categories/categories.html',
        controller: 'CategoriesController',
        controllerAs: 'cate'
      })

      ;

    $urlRouterProvider.otherwise('/');
  }

})();
