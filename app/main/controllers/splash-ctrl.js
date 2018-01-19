'use strict';
angular.module('main')
  .controller('SplashCtrl', function ($log, $timeout, $scope, $state) {
    //var ctrl = this;
    $log.log('Hello from your Controller: SplashCtrl in module main:. This is your controller:', this);
    $timeout(function () {
      $state.go('signin');
    }, 1080);
  });
