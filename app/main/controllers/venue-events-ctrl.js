'use strict';
angular.module('main')
  .controller('VenueEventsCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: VenueEventsCtrl in module main:. This is your controller:', this);
    ctrl.isFavoriteActive = false;
    ctrl.activeFavorite = function () {
      ctrl.isFavoriteActive = ctrl.isFavoriteActive ? false : true;
    };
    ctrl.goBack = function () {
      $state.go('eventDetails');
    };
  });
