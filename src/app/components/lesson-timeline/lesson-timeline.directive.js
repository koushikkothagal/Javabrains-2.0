(function () {
  'use strict';

  angular
    .module('javabrains')
    .directive('lessonTimeline', LessonTimelineDirective);

  /** @ngInject */
  function LessonTimelineDirective() {

    return {
      templateUrl: '/app/components/lesson-timeline/lesson-timeline.html',
      controller: LessonTimelineCtrl,
      scope: {
        'course': '=',
        'showLessons': '='
      },
      controllerAs: 'ctrl'
    };

  }



  function LessonTimelineCtrl($scope, $location) {
    console.log($scope.course);
    this.course = $scope.course;
    this.showLessons = $scope.showLessons;
    console.log($scope.showLessons);
    
    
    
  }






})(); 