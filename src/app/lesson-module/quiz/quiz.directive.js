(function() {
  'use strict';

  angular
    .module('javabrains')
    .directive('quiz', QuizDirective);

  /** @ngInject */
  function QuizDirective() {
	  
	  return {
		  templateUrl: '/app/lesson-module/quiz/quiz.html',
      controller: QuizModuleCtrl,
      controllerAs: 'ctrl'
	  };
     
  }
  
  
  
  function QuizModuleCtrl() {
  
  this.quiz = {
    'title': 'QuizTitle',

    "questions": [
      {
        "id": "l-production-design-knowledge_card-q--1",
        "description": "How can a strong visual style help you build a fan following?",
        "answers": [
          {
            "content": "\u003cp\u003eFans will recognize your videos.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eFans will get tired of your stuff.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eFans are hard to get.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eFans don’t remember much.\u003c/p\u003e"
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
            "content": "\u003cp\u003ePick fitting locations and colors.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eTry lots of different things.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse confetti.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eRent out a great space.\u003c/p\u003e"
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
            "content": "\u003cp\u003eMake everything black and white.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse every color of the rainbow.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eJust fix everything in color correction.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse consistent colors.\u003c/p\u003e"
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
            "content": "\u003cp\u003eMake everything black and white.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse every color of the rainbow.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eJust fix everything in color correction.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse consistent colors.\u003c/p\u003e"
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
        "description": "How can you create a different appearance for a different type of video while maintaining a consistent channel look and budget?",
        "answers": [
          {
            "content": "\u003cp\u003eMake everything black and white.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse every color of the rainbow.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eJust fix everything in color correction.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse consistent colors.\u003c/p\u003e"
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
            "content": "\u003cp\u003eMake everything black and white.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse every color of the rainbow.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eJust fix everything in color correction.\u003c/p\u003e"
          },
          {
            "content": "\u003cp\u003eUse consistent colors.\u003c/p\u003e"
          }
        ],
        "correctAnswer": 4,
        "correctAnswerMainTitle": "You got it right!",
        "correctAnswerDescription": "Consistency in colors can definitely help viewers recognize your visual style.",
        "incorrectAnswerMainTitle": "Oops try again.",
        "incorrectAnswerDescription": "Think about why consistency is beneficial to creating a style for your videos."
      }
    ]

  };
  this.quizStarted = true;
  this.showTabs = true;
  this.userData = {
    'quizAnswers': {}
  };
  this.activeQuestionIndex = 0;
  
  this.activateQuestion = function(questionNumber) {
    this.setActiveQuestionIndex(questionNumber);
    // this.updateQuiz();
    // this.showSubmitButton = Wb(this)
  };
  
  this.setActiveQuestionIndex = function(questionNumber) {
    this.activeQuestionIndex = questionNumber;
  };
  
  this.isAnswerCorrect = function(question) {
    var answer = this.userData.quizAnswers[question.id];
    return null != answer && answer == question.correctAnswer - 1;
  };
  
  this.isAnswerIncorrect = function(question) {
      var answer = this.userData.quizAnswers[question.id];
      return null != answer && answer != question.correctAnswer - 1;
  };

  
  
  

};
  
  
})(); 