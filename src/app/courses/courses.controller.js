(function() {
  'use strict';

  angular
    .module('javabrains')
    .controller('CoursesController', CoursesController);

  /** @ngInject */
  function CoursesController(courseDataService, $stateParams) {
    this.filterValue = '';
    var that = this;
    this.filter = {
      "tags": {
         
          
        },
        "level": {
          "Beginner": true,
          "Intermediate": true,
          "Advanced": true
        }
        
     };
    
    this.topics = courseDataService.topics;
    // var topicNames = _.values(this.topics);
    var queryParam = $stateParams.tag;
    if (!queryParam) {
      queryParam = 'All';
    }
    this.filter.tags[queryParam] = queryParam;
    
    /* 
    var topicThatsChecked = 
      _.find(that.topics, function(topic) {
        var tagValue = that.filter.tags[topic.name];
        return (tagValue && tagValue.length);
      });
      
    if (!topicThatsChecked) {
      this.filter.tags['All'] = 'All';
    }
    */
    
    this.courses = courseDataService.courses;
    
    this.filterTopics = function(filterValue) {
      this.filterValue = filterValue;
    }
    
    
    this.topicChanged = function(ev) {
      
      if (ev.target.tagName === 'INPUT') {
          
        if (ev.target.id === 'all') {
          this.filter.tags = {
            'All': 'All'
          }
        }
        else {
          this.filter.tags['All'] = '';
        }
        
        var topicThatsChecked = 
        _.find(that.topics, function(topic) {
          var tagValue = that.filter.tags[topic.name];
          return (tagValue && tagValue.length);
        });
        
        if (!topicThatsChecked) {
          this.filter.tags['All'] = 'All';
        }
        
          
      }
      
      
    }
    

    
     
     
     // this.topicChanged();
     
     
  }
})();