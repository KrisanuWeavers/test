'use strict';
angular.module('main')
  .controller('VenueInfoCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: VenueInfoCtrl in module main:. This is your controller:', this);
    //$ionicConfig.tabs.position('top');
    ctrl.goBack = function () {
      $state.go('eventDetails');
    };
  });
