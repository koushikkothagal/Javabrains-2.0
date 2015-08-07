(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('TopicsController', TopicsController);

  /** @ngInject */
  function TopicsController(courseDataService) {
    this.filterValue = '';
    this.topics = courseDataService.topics;
    
    this.filterTopics = function(filterValue) {
      this.filterValue = filterValue;
    }
  }
})();