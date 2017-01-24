(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('CategoriesController', CategoriesController);

  /** @ngInject */
  function CategoriesController($resource,$stateParams) {
    var cate = this;
    console.log('param', $stateParams);
    cate.toto = $stateParams.cate;


  }
})();
