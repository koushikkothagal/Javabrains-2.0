(function() {
  'use strict';

  angular
    .module('javabrains.common')
    .directive('navbar', Navbar);

  /** @ngInject */
  function Navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: '/app/components/navbar/navbar.html',
      scope: {
          
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($location, $rootScope) {
      var vm = this;
      vm.currentUrl = $location.path();
      console.log($location.path());
      vm.isCoursesUrl = $location.path().startsWith('/courses');
      vm.isTopicsUrl = $location.path().startsWith('/topics');
      vm.isAboutUrl = $location.path().startsWith('/about');
      $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
          window.scrollTo(0, 0);
          vm.currentUrl = $location.path(); 
          vm.isCoursesUrl = vm.currentUrl.startsWith('/courses');
          vm.isTopicsUrl = vm.currentUrl.startsWith('/topics');
          vm.isAboutUrl = vm.currentUrl.startsWith('/about');
        });
      
    }
  }

})();
