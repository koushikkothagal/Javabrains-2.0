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



  function LessonSectionCtrl($scope, $location, REST_ROOT_URL, $http, $stateParams) {
    var vm = this;
    vm.lesson = $scope.lesson;
    prepareData(vm.lesson, $location);
    $http.get(REST_ROOT_URL + 'courses/' + $stateParams.courseName, {cache: true})
      .then(function (response) {
        vm.course = response.data;
        vm.allLessons = [];
        vm.showLessons = {
          'enablePanel': false,
          'unit': '1'
        }

        for (var i = 0; i < vm.course.units.length; i++) {
          var unit = vm.course.units[i];
          for (var j = 0; j < unit.lessons.length; j++) {
            var aLesson = unit.lessons[j];
            if (vm.lesson.permalinkName === aLesson.permalinkName) {
              aLesson.current = true;
            }
            vm.allLessons.push(aLesson);
          }
          // vm.allLessons = vm.allLessons.concat(unit.lessons);

        }
      });
      
    /*
        vm.course = { "code": "maven_intro", "desc": "This course is an introduction to the basic features of Apache Maven. You will learn what Maven is and how it helps managing dependencies in your Java project. You will understand POM configuration, build phases and use plugins.", "img": "https://i.ytimg.com/vi/al7bRZzz4oU/mqdefault.jpg", "level": "Beginner", "name": "Introduction to Maven", "objectives": ["Learning what Maven is and how it works", "Understanding the concept of Maven archetypes", "Creating a new web application using Maven", "Understand build phases and lifecycle", "Using Maven plugins and integrating with the Eclipse IDE"], "slNo": 8, "tags": ["Java", "Maven"], "topic": "maven", "units": [{ "courseCode": "maven_intro", "firstLesson": "Introduction-and-Setting-up-Part-1", "lessons": [{ "description": "In this tutorial, we'll download and install Maven in our development environment.", "permalinkName": "Introduction-and-Setting-up-Part-1", "title": "Introduction and Setting up Part 1", "unitNumber": 1 }, { "description": "In this tutorial, we'll have our first look at pom.xml and we'll compile our project.", "permalinkName": "Introduction-and-Setting-up-Part-2", "title": "Introduction and Setting up Part 2", "unitNumber": 1}], "totalLessons": 2, "unitDescription": "In this unit, you'll understand what Maven is, and why it is useful. You will also setup a simple Maven project from scratch and configure pom.xml.", "unitName": "Introduction and Setting Up", "unitNumber": 1 }, { "courseCode": "maven_intro", "firstLesson": "Understanding-Archetypes-and-pom.xml", "lessons": [{ "description": "We'll now understand what happens when we run the archetype:generate command and how that affects the pom.xml.", "permalinkName": "Understanding-Archetypes-and-pom.xml", "title": "Understanding Archetypes and pom.xml", "unitNumber": 2, "done": true }, { "description": "We'll now learn what the build process in Maven consists of, the build phases and we'll run commands to execute some phases.", "permalinkName": "Maven-Build-Phases", "title": "Maven Build Phases", "unitNumber": 2 }, { "description": "In this tutorial we'll learn about dependencies by adding one. We'll write code to use the slf4j logging framework, and we'll modify our pom.xml to specify the dependency to Maven.", "permalinkName": "Adding-a-Dependency", "title": "Adding a Dependency", "unitNumber": 2, "done": true }, { "description": "We'll use the web application archetype to create a barebones web application. We'll then package, deploy in Tomcat and access this application.", "permalinkName": "A-Web-Application-Using-Maven", "title": "A Web Application Using Maven", "unitNumber": 2 }], "totalLessons": 4, "unitDescription": "Understand some of the basic Maven concepts like archetypes, build phases and dependencies. Setup a web application using Maven that covers the concepts you've learned.", "unitName": "Maven Concepts", "unitNumber": 2 }, { "courseCode": "maven_intro", "firstLesson": "Introduction-to-Plugins-with-the-Maven-Compiler-Plugin", "lessons": [{ "description": "In this tutorial, we'll add the Maven compiler plugin configuration to the pom.xml.", "permalinkName": "Introduction-to-Plugins-with-the-Maven-Compiler-Plugin", "title": "Introduction to Plugins with the Maven Compiler Plugin", "unitNumber": 3 }, { "description": "There are some Maven plugins that are full Servlet containers. We'll look at an example: the Jetty plugin, and we'll see how it makes developing web applications easier.", "permalinkName": "Using-the-Jetty-Plugin", "title": "Using the Jetty Plugin", "unitNumber": 3 }, { "description": "More plugins! We'll use the Maven's Eclipse plugin to get our Maven project into the Eclipse IDE. We'll also download and install the m2eclipse plugin of Eclipse to bring Maven functionality into the Eclipse GUI.", "permalinkName": "Eclipse-Plugin-for-Maven-and-Maven-Plugin-for-Eclipse", "title": "Eclipse Plugin for Maven and Maven Plugin for Eclipse", "unitNumber": 3 }], "totalLessons": 3, "unitDescription": "Maven has a concept of plugins that let you implement added funcionality to your build cycle. Learn about the Jetty plugin that lets you spin up a servlet container right from a Maven command. Also, learn how to integrate Maven with Eclipse.", "unitName": "Maven Plugins", "unitNumber": 3, "done": true }] };
    */





    vm.showOrHideLessons = function (unitNumber) {
      vm.showLessons.enablePanel = !vm.showLessons.enablePanel;
      vm.showLessons.unit = unitNumber;
      
      
      /*
      if (vm.showLessons.unit === unitNumber) {
        vm.showLessons.enablePanel = false;
        vm.showLessons.unit = '';
      }
      else {
        vm.showLessons.enablePanel = true;
        vm.showLessons.unit = unitNumber;  
      }
      */


    }

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