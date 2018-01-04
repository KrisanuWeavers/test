'use strict';
angular.module('main')
  .controller('SignupComCtrl', function ($log, $state) {

    $log.log('Hello from your Controller: SignupComCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.saveFavorites = function () {
      $state.go('main.list');
    };
  });
