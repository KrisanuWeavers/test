'use strict';
angular.module('main')
  .controller('ProfileCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: ProfileCtrl in module main:. This is your controller:', this);
    ctrl.goBack = function () {
      $state.go('main.list');
    };
  });
