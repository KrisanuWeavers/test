'use strict';
angular.module('main')
  .controller('SigninCtrl', function ($log, $state) {
    $log.log('Hello from your Controller: SigninCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.signIn = function () {
      $state.go('main.list');
    };
    ctrl.fbSignIn = function () {
      $state.go('main.list');
    };
  });
