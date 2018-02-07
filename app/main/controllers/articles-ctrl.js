'use strict';
angular.module('main')
  .controller('ArticlesCtrl', function ($scope, $log, Store, $localStorage, $state, $ionicLoading) {
    $log.log('Hello from your Controller: ArticlesCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $scope.$on('$ionicView.afterEnter', function () {
      $log.log($localStorage.savedUser.token);
      Store.getArticles($localStorage.savedUser.token)
        .then(function (response) {
          $ionicLoading.hide();
          $log.log('======Article List=======');
          $log.log(response.data.articles);
          ctrl.response = response.data.articles;
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $log.log(error);
        });
    });
    ctrl.getArticleDetails = function (detailsId) {
      $state.go('articleDetails', { id: detailsId });
    };
  });
