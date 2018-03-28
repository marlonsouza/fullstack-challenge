(function() {
    'use strict';
  
    angular
      .module('fullstackChallenge')
      .factory('PalindromeApi', PalindromeApi);
  
    /** @ngInject */
    function PalindromeApi(Restangular) {
      var self = {};
    
      self.get = function(word){
          return Restangular.one('palindrome', word).get();
      }
      
      return self;
    }
  })();
  