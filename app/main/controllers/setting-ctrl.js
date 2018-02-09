'use strict';
angular.module('main')
  .controller('SettingCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: SettingCtrl in module main:. This is your controller:', this);
    ctrl.goBack = function () {
      $state.go('main.profile');
    };
  });
