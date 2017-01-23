(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('CateMarsController', CateMarsController);

  /** @ngInject */
  function CateMarsController($resource) {
    var mars = this;

    mars.toto = 'MARSS'


  }
})();
