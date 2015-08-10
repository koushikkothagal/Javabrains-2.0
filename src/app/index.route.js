(function() {
  'use strict';

  angular
    .module('javabrains')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('topics', {
        url: '/topics',
        templateUrl: '/app/topics/topics.html',
        controller: 'TopicsController',
        controllerAs: 'topics'
      })
      .state('courses', {
        url: '/courses?tag',
        templateUrl: '/app/courses/courses.html',
        controller: 'CoursesController',
        controllerAs: 'courses'
      })
      .state('course', {
        url: '/courses/:courseName',
        resolve: {
          courseData:  function(REST_ROOT_URL, $http, $stateParams, $q){
            // return $http.get(REST_ROOT_URL + 'courses/' + $stateParams.courseName);
            return $q.when({});
         },
        },
        templateUrl: '/app/coursedetail/coursedetail.html',
        controller: 'CourseDetailController',
        controllerAs: 'course',
        
      })
      .state('lesson', {
        url: '/courses/:courseName/lessons/:lessonName',
        resolve: {
          courseData:  function(REST_ROOT_URL, $http, $stateParams, $q){
            // return $http.get(REST_ROOT_URL + 'courses/' + $stateParams.courseName);
            return $q.when({});
         },
        },
        templateUrl: '/app/lessons/lessons.html',
        controller: 'LessonController',
        controllerAs: 'lesson',        
      })
      .state('lessonmodule', {
        url: '/courses/:courseName/lessons/:lessonName/:moduleName',
        resolve: {
          courseData:  function(REST_ROOT_URL, $http, $stateParams, $q){
            // return $http.get(REST_ROOT_URL + 'courses/' + $stateParams.courseName);
            return $q.when({});
         },
        },
        templateUrl: '/app/lesson-module/lesson-module.html',
        controller: 'LessonModuleController',
        controllerAs: 'lessonModule',        
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
