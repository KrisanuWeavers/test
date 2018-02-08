'use strict';
angular.module('main')
  .controller('ArticleDetailsCtrl', function ($scope, $log, $state, $ionicLoading, $localStorage, Store) {
    var ctrl = this;
    $log.log('Hello from your Controller: ArticleDetailsCtrl in module main:. This is your controller:', this);
    $log.log($state.params.id);
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $scope.$on('$ionicView.afterEnter', function () {
      Store.getArticlesDetails($localStorage.savedUser.token, $state.params.id)
        .then(function (response) {
          $ionicLoading.hide();
          $log.log('======Article Details=======');
          $log.log(response);
          ctrl.eventMainImage = response.data.article.image;
          ctrl.eventTitle = response.data.article.title;
          ctrl.eventLikesCount = response.data.article.likes_count;
          ctrl.eventDate = response.data.article.created_on;
          ctrl.eventDetails = response.data.article.content;
          if (response.data.article.author.photo === null) {
            ctrl.authorImg = 'main/assets/images/ic_default_user_photo.png';
          } else {
            ctrl.authorImg = response.data.article.author.photo;
          }
          ctrl.authorTitle = response.data.article.author.name;
          ctrl.blocks = response.data.article.blocks;
          if (response.data.article.is_liked === true) {
            ctrl.activateFavorite = 'activated';
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          $log.log(error);
        });
    });
    ctrl.setArticlelike = function () {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      Store.setLikeArticle($localStorage.savedUser.token, $state.params.id, $localStorage.savedUser.userId)
        .then(function (response) {
          $ionicLoading.hide();
          $log.log('======Set Article Like=======');
          $log.log(response);
          if (response.data.status === 200) {
            ctrl.activateFavorite = 'activated';
          }
        }).catch(function (error) {
          $ionicLoading.hide();
          $log.log(error);
        });
    };
    ctrl.setVenuelike = function (venueId) {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      Store.setLikeVenue($localStorage.savedUser.token, venueId, $localStorage.savedUser.userId)
        .then(function (response) {
          $ionicLoading.hide();
          $log.log('======Set Venue Like=======');
          $log.log(response);
        }).catch(function (error) {
          $ionicLoading.hide();
          $log.log(error);
        });
    };
    ctrl.goBack = function () {
      $state.go('main.articles');
    };
  });
