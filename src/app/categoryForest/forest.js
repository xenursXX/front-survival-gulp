(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('CateForestController', CateForestController);

  /** @ngInject */
  function CateForestController($resource) {
    var forest = this;

    forest.toto = "forrressst"


  }
})();
