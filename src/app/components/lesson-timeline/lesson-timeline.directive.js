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



  function LessonTimelineCtrl($scope, $location, $timeout) {
    console.log($scope.course);
    var vm = this;
    this.course = $scope.course;
    this.showLessons = $scope.showLessons;
    console.log($scope.showLessons);

    $scope.$watch("showLessons.unit", function (newValue, oldValue) {
      for (var i = 0; i < vm.course.units.length; i++) {
        vm.course.units[i].active = false;
      }
      // http://stackoverflow.com/questions/23786985/angular-ui-boostrap-carousel-setting-active-slide-after-making-new-slides
      $timeout(function () {
        vm.course.units[newValue - 1].active = true;
      }, 100);


    });




  }






})(); 