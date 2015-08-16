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
      scope: {
        'lesson': '='
      },
      controllerAs: 'ctrl'
    };

  }



  function LessonSectionCtrl($scope, $location) {
    
    this.lesson = $scope.lesson;
    
/*
    this.lesson = {
      "slNo": 1,
      "title": "Introduction",
      'courseCode': 'javaee_jaxrs',
      "description": "Welcome to this course. This tutorial introduces you to REST APIs and explains some basic concepts.",
      "youtube": "xkKcdK1u95s",
      "nextLessonPermalinkName": "REST-and-HTTP",
      "permalinkName": "introduction",
      "unitSlNo": "1.2",
      "sections": [
        {
          "id": "VCcJ6fV3C0",
          "name": "Text",
          "content": "<h2 id=\"welcome\">Welcome</h2>",
          "permalinkName": "text"
        },
        {
          "name": "Challenges",
          "permalinkName": "quiz",
          "content": [
            {
              "id": "l-production-design-knowledge_card-q--1",
              "description": "How can a strong visual style help you build a fan following? lakjg sdfkjahgsdf kjashgf kasjdhfg askdjhfgas dkfjhsg ?",
              "answers": [
                {
                  "content": "Fans will recognize your videos."
                },
                {
                  "content": "Fans will get tired of your stuff."
                },
                {
                  "content": "Fans are hard to get."
                },
                {
                  "content": "Fans don’t remember much."
                }
              ],
              "correctAnswer": 1,
              "correctAnswerMainTitle": "Great, you got it right!",
              "correctAnswerDescription": "Having a strong visual style can help viewers immediately recognize your work.",
              "incorrectAnswerMainTitle": "Not quite.",
              "incorrectAnswerDescription": "Think about why having a strong visual sense can actually be beneficial to your channel."
            },
            {
              "id": "l-production-design-knowledge_card-q--2",
              "description": "How can you create a look for your videos?",
              "answers": [
                {
                  "content": "Pick fitting locations and colors."
                },
                {
                  "content": "Try lots of different things."
                },
                {
                  "content": "Use confetti."
                },
                {
                  "content": "Rent out a great space."
                }
              ],
              "correctAnswer": 1,
              "correctAnswerMainTitle": "Well done!",
              "correctAnswerDescription": "Picking memorable visual cues and locations can definitely help your videos stand out.",
              "incorrectAnswerMainTitle": "Hmm, not quite.",
              "incorrectAnswerDescription": "Think about what you learned in the video about why color selection and locations can help your videos stand out, and be memorable."
            },
            {
              "id": "l-production-design-knowledge_card-q--3",
              "description": "How can you create a different appearance for a different type of video while maintaining a consistent channel look and budget?",
              "answers": [
                {
                  "content": "Make everything black and white."
                },
                {
                  "content": "Use every color of the rainbow."
                },
                {
                  "content": "Just fix everything in color correction."
                },
                {
                  "content": "Use consistent colors."
                }
              ],
              "correctAnswer": 4,
              "correctAnswerMainTitle": "You got it right!",
              "correctAnswerDescription": "Consistency in colors can definitely help viewers recognize your visual style.",
              "incorrectAnswerMainTitle": "Oops try again.",
              "incorrectAnswerDescription": "Think about why consistency is beneficial to creating a style for your videos."
            },

            {
              "id": "l-production-design-knowledge_card-q--4",
              "description": "How can you create a different appearance for a different type of video while maintaining a consistent channel look and budget?",
              "answers": [
                {
                  "content": "Make everything black and white."
                },
                {
                  "content": "Use every color of the rainbow."
                },
                {
                  "content": "Just fix everything in color correction."
                },
                {
                  "content": "Use consistent colors."
                }
              ],
              "correctAnswer": 4,
              "correctAnswerMainTitle": "You got it right!",
              "correctAnswerDescription": "Consistency in colors can definitely help viewers recognize your visual style.",
              "incorrectAnswerMainTitle": "Oops try again.",
              "incorrectAnswerDescription": "Think about why consistency is beneficial to creating a style for your videos."
            },
            {
              "id": "l-production-design-knowledge_card-q--5",
              "description": "Let's say you have Category as an entity that represents all the product categories on the site. What would be a RESTful URI to look up a category with ID {categoryId}? <br/> Example: The RESTful URI for the Profile entity is /profiles/{profileId}.",
              "answers": [
                {
                  "content": "Make everything black and white."
                },
                {
                  "content": "Use every color of the rainbow."
                },
                {
                  "content": "Just fix everything in color correction."
                },
                {
                  "content": "Use consistent colors."
                }
              ],
              "correctAnswer": 4,
              "correctAnswerMainTitle": "You got it right!",
              "correctAnswerDescription": "Consistency in colors can definitely help viewers recognize your visual style.",
              "incorrectAnswerMainTitle": "Oops try again.",
              "incorrectAnswerDescription": "Think about why consistency is beneficial to creating a style for your videos."
            },
            {
              "id": "l-production-design-knowledge_card-q--6",
              "description": "How can you create a different appearance for a different type of video while maintaining a consistent channel look and budget?",
              "answers": [
                {
                  "content": "Make everything black and white."
                },
                {
                  "content": "Use every color of the rainbow."
                },
                {
                  "content": "Just fix everything in color correction."
                },
                {
                  "content": "Use consistent colors."
                }
              ],
              "correctAnswer": 4,
              "correctAnswerMainTitle": "You got it right!",
              "correctAnswerDescription": "Consistency in colors can definitely help viewers recognize your visual style.",
              "incorrectAnswerMainTitle": "Oops try again.",
              "incorrectAnswerDescription": "Think about why consistency is beneficial to creating a style for your videos."
            }
          ]


        }
      ]
    };
*/
    prepareData(this.lesson, $location);
  }



  function prepareData(lesson, $location) {

    lesson.url = '/courses/' + lesson.courseCode + '/lessons/' + lesson.permalinkName;
    if (lesson.prevLessonPermalinkName) {
      lesson.prevLessonPermalinkName = '/courses/' + lesson.courseCode + '/lessons/' + lesson.prevLessonPermalinkName;
    }
    if (lesson.nextLessonPermalinkName) {
      lesson.nextLessonPermalinkName = '/courses/' + lesson.courseCode + '/lessons/' + lesson.nextLessonPermalinkName;
    }

    var url = $location.path();
    if (url.endsWith(lesson.url)) {
      lesson.isSelected = true;
    }

    for (var index in lesson.sections) {
      var section = lesson.sections[index];
      section.url = lesson.url + '/' + section.permalinkName;
      if (url.endsWith(lesson.permalinkName + '/' + section.permalinkName)) {
        section.isSelected = true;
      }
    }
    return lesson;

  }





})(); 