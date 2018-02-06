'use strict';
angular.module('main')
  .controller('ArticleDetailsCtrl', function ($log, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: ArticleDetailsCtrl in module main:. This is your controller:', this);
    $log.log($state.params.id);
    ctrl.goBack = function () {
      $state.go('main.articles');
    };
  });
