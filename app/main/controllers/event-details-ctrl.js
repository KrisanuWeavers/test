'use strict';
angular.module('main')
  .controller('EventDetailsCtrl', function ($log, $scope, $ionicScrollDelegate, $window, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: EventDetailsCtrl in module main:. This is your controller:', this);
    /**********************************
     * Change header bar background transparent to color alpha when scrolling
     * https://codepen.io/bennyboybrizzle/pen/ByvrMN
    ***********************************/
    $scope.changeHeader = function (id) {
      var el = document.getElementById(id),
        windowHeight = $window.innerHeight,
        scrollPosition = $ionicScrollDelegate.getScrollPosition().top - windowHeight / 10;
      var alpha = scrollPosition / windowHeight * 8;

      el.style.backgroundColor = 'rgba(1,115,248,' + alpha + ')';
    };

    angular.element(document).ready(function () {
      document.getElementById('myFunction').onscroll = function () {
        $log.log('scrolling!');
        $scope.changeHeader('ben-header');

      };
    });
    /********************************************
     * Change header bar background end
    *********************************************/
    ctrl.goBack = function () {
      $state.go('main.list');
    };

  });
