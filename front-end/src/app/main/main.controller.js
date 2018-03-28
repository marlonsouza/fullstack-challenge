(function() {
  'use strict';

  angular
    .module('fullstackChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, PalindromeApi, $log) {
    var vm = this;

    vm.result = '';
    vm.isPalindrome = isPalindrome;

    activate();

    function activate() {
    
    }

    function isPalindrome(word) {
      PalindromeApi.get(word).then(function(resp){
        vm.result = resp.message;
        $log.log(resp.message);
      }, function(err){
        vm.result = err.data.message;
      });
    }

    
  }
})();
