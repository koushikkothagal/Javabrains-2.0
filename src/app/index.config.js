(function () {
  'use strict';

  angular
    .module('javabrains')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    // HTML5 model URLs
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });


  }

  // TODO: Better place for polyfills
  
  // String endsWith() polyfill
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    };
  }



})();
