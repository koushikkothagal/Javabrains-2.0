(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('LessonController', LessonController);

  /** @ngInject */
  function LessonController(lessonData, $sce) {
    console.log(lessonData);
    this.info = lessonData.data;
    this.info.youtube = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + this.info.youtube + '?rel=0&showinfo=0');
    console.log(this.info);
     
  }
})();