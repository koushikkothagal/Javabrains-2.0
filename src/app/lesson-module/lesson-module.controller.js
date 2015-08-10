(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('LessonModuleController', LessonModuleController);

  /** @ngInject */
  function LessonModuleController($stateParams) {
     this.isText = $stateParams.moduleName === 'text';
     this.isQuiz = $stateParams.moduleName === 'quiz';
  }
})();