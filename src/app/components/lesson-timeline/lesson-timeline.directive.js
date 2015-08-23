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
        'showLessonsFor': '='
      },
      controllerAs: 'ctrl'
    };

  }



  function LessonTimelineCtrl($scope, $location) {
    console.log($scope.course);
    this.course = $scope.course;
    this.showLessonsFor = $scope.showLessonsFor;
    console.log($scope.showLessonsFor);
    
    
    
  }






})(); 