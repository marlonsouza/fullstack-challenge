(function() {
  'use strict';

  angular
    .module('fullstackChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, PalindromeApi) {
    var vm = this;

    vm.result = {};
    vm.isPalindrome = isPalindrome;

    activate();

    function activate() {
    
    }

    function isPalindrome(word) {
      if(!word){
        vm.result = {};
        vm.result.message = "Enter then word";
        vm.result.error = true;
        return;
      }

      PalindromeApi.get(word).then(function(resp){
        vm.result = {};
        vm.result.message = resp.message;
        vm.result.success = true;
      }, function(err){
        vm.result = {};
        vm.result.message = err.data.message;
        vm.result.error = true;
      });
    }

    
  }
})();
