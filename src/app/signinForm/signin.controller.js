(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('signInController', signInController);

  /** @ngInject */
  function signInController() {
    var sign = this;

    sign.toto = 'hello signIn';



  }
})();
