(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('signOutController', signOutController);

  /** @ngInject */
  function signOutController($resource) {
    var sign = this;

    sign.toto = $resource('../../static/ressources.json')
    .query()
    .$promise
    .then(function(result){
      console.log(result[0].signin)
    });


  }
})();
