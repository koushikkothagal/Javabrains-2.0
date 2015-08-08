(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('CourseDetailController', CourseDetailController);

  /** @ngInject */
  function CourseDetailController(courseData) {
     this.info = courseData.data.course;
     this.topic = courseData.data.topic;
     this.units = courseData.data.units;
     // Remove the first element of the array. Currently the API returns unit at index 0 as undefined.
     this.units.splice(0, 1);
     
     this.info.imageUrl = 'http://javabrains.koushik.org/assets/images/' + this.info.code + '.jpg'
     
     angular.forEach(this.units, function(unit) {
       unit.slNo = '0' + unit.slNo; // Not planning to *ever* have > 10 units per course. Change this if that isn't true.
     })
  }
})();