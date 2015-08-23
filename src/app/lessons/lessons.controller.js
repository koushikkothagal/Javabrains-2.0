(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('LessonController', LessonController);

  /** @ngInject */
  function LessonController(lessonData, $sce) {
    this.info = lessonData.data;
    this.info.youtube = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + this.info.youtube + '?rel=0&showinfo=0&fs=1');
     
  }
})();