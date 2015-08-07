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
        url: '/courses/detail',
        templateUrl: '/app/coursedetail/coursedetail.html',
        controller: 'CourseDetailController',
        controllerAs: 'course'
      })
      ;

    $urlRouterProvider.otherwise('/');
  }

})();
