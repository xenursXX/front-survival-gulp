(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('CateZombieController', CateZombieController);

  /** @ngInject */
  function CateZombieController($resource) {
    var zombie = this;

    zombie.toto = "ZOMMMBIE"


  }
})();
