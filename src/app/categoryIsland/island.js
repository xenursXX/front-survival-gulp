(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('CateIslandController', CateIslandController);

  /** @ngInject */
  function CateIslandController($resource) {
    var island = this;
    island.toto = "ISLANNND"


  }
})();
