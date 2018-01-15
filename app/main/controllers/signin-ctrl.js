'use strict';
angular.module('main')
  .controller('SigninCtrl', function ($log, $state, $timeout) {
    $log.log('Hello from your Controller: SigninCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.isSignInVisible = false;
    $timeout(function () {
      ctrl.isSignInVisible = true;
    }, 1055);
    ctrl.signIn = function () {
      $state.go('main.list');
    };
    ctrl.fbSignIn = function () {
      $state.go('main.list');
    };
  });
