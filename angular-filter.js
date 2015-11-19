(function(){
  'use strict';
  var Myfilter = function($sce){
    return function(input, phrase){
     if (phrase){
       input = input.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>');
     }
     return $sce.trustAsHtml(input);
   };
  };
  angular.module('angular-highlighter', [])
    .filter('angularHighligher',[
      Myfilter
    ]);
})();