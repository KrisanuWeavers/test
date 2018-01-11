'use strict';
angular.module('main')
  .controller('ArticleDetailsCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: ArticleDetailsCtrl in module main:. This is your controller:', this);
    ctrl.goBack = function () {
      $state.go('main.articles');
    };
  });
