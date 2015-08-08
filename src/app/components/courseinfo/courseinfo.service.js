(function() {
  'use strict';

  angular
    .module('javabrains')
    .factory('CourseRemoteDataService', CourseRemoteDataService);

  /** @ngInject */
  function CourseRemoteDataService(REST_ROOT_URL) {
    var service = {};
    
    service.getCourseData = function(courseName) {
      return $http.get(REST_ROOT_URL + 'api/courses/javaee_jaxws');
    }
    
    return service;
     
  }
})();