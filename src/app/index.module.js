(function() {
  'use strict';

  angular.module('javabrains.common', []);
  angular
    .module('javabrains', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 
                           'angularUtils.directives.dirPagination', 'ngScrollSpy',
                            'javabrains.common']);

})();
