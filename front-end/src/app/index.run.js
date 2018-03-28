(function() {
  'use strict';

  angular
    .module('fullstackChallenge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
