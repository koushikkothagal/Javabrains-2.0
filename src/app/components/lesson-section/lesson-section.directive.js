(function () {
  'use strict';

  angular
    .module('javabrains')
    .directive('lessonSection', LessonSectionDirective);

  /** @ngInject */
  function LessonSectionDirective() {

    return {
      templateUrl: '/app/components/lesson-section/lesson-section.html',
      controller: LessonSectionCtrl,
      controllerAs: 'ctrl'
    };

  }



  function LessonSectionCtrl() {

    this.lesson = {
      "slNo": 1,
      "title": "Introduction",
      "description": "Welcome to this course. This tutorial introduces you to REST APIs and explains some basic concepts.",
      "youtube": "xkKcdK1u95s",
      "nextLessonPermalinkName": "REST-and-HTTP",
      "permalinkName": "introduction",
      "sections": [
        {
          "id": "VCcJ6fV3C0",
          "name": "Text",
          "content": "<h2 id=\"welcome\">Welcome</h2>",
          "permalinkName": "text"
        }
      ]
    }





  }


})(); 