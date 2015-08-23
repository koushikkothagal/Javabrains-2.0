(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('CourseDetailController', CourseDetailController);

  /** @ngInject */
  function CourseDetailController(courseData, courseDataService) {
     this.info = courseData.data;
     // Remove the first element of the array. Currently the API returns unit at index 0 as undefined.
     // this.units.splice(0, 1);
     this.info.topicName = _.findWhere(courseDataService.topics, {'id': this.info.topic}).name;
     this.info.imageUrl = 'http://javabrains.koushik.org/assets/images/' + this.info.code + '.jpg'
     this.info.courseBaseUrl = '/courses/' + this.info.code + '/lessons/';
     this.info.startCourseUrl =  this.info.courseBaseUrl + this.info.units[0].firstLesson;
     angular.forEach(this.info.units, function(unit) {
       unit.unitNumber = '0' + unit.unitNumber; // Not planning to *ever* have > 10 units per course. Change this if that isn't true.
     })
  }
})();