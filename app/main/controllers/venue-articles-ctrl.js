'use strict';
angular.module('main')
  .controller('VenueArticlesCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: VenueArticlesCtrl in module main:. This is your controller:', this);
    ctrl.isFavoriteActive = false;
    ctrl.activeFavorite = function () {
      ctrl.isFavoriteActive = ctrl.isFavoriteActive ? false : true;
    };
    ctrl.goBack = function () {
      $state.go('eventDetails');
    };
  });
