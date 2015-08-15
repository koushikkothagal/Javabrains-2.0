(function() {
  'use strict';

  angular
    .module('javabrains')
    .directive('manuscript', ManuscriptDirective);

  /** @ngInject */
  function ManuscriptDirective() {
	  
	  return {
		  templateUrl: '/app/lesson-module/manuscript/manuscript.html',
      scope: {
        'content': '='
      }
	  };
     
  }
})();