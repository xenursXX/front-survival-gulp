(function() {
  'use strict';

  angular
    .module('gulpAngular')
    .controller('ProfileController', ProfileController);

  /** @ngInject */
  function ProfileController() {
    var profile = this;

    profile.toto = 'hello';



  }
})();
