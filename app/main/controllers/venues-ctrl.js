'use strict';
angular.module('main')
  .controller('VenuesCtrl', function ($log) {
    var ctrl = this;
    $log.log('Hello from your Controller: VenuesCtrl in module main:. This is your controller:', this);
    ctrl.isFavoriteActive = false;
    ctrl.activeFavorite = function () {
      ctrl.isFavoriteActive = ctrl.isFavoriteActive ? false : true;
    };
  });
