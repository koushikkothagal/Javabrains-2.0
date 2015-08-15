(function () {
  'use strict';

  angular
    .module('javabrains')
    .factory('remoteDataService', CourseRemoteDataService);

  /** @ngInject */
  function CourseRemoteDataService(REST_ROOT_URL) {
    var service = {};


    service.getCourseData = function (courseName) {
      if (service.courseData) {
        return $q.when(service.courseData);
      }
      return $http.get(REST_ROOT_URL + 'api/courses/javaee_jaxws')
        .then(function (response) {
          service.courseData = response.data;
          return service.courseData;
        });

      return service;

    }
    

    
  }

})();