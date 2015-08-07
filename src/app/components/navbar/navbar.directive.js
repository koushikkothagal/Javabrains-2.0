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
    function NavbarController() {
      var vm = this;
      // console.log($location.path());

      
    }
  }

})();
