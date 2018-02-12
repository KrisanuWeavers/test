'use strict';
angular.module('main')
  .controller('VenueInfoCtrl', function ($scope, $log, $state, Store, $ionicLoading) {
    var ctrl = this;
    ctrl.OtherImages = [];
    $log.log('Hello from your Controller: VenueInfoCtrl in module main:. This is your controller:', this);
    $scope.$on('$ionicView.afterEnter', function () {
      Store.getListDetails($state.params.placeid)
        .then(function (response) {
          $ionicLoading.hide();
          $log.log('======Venue Details=======');
          ctrl.venueName = response.data.result.name;
          ctrl.addr = response.data.result.vicinity;
          ctrl.venueMainImgRef = response.data.result.photos[0].photo_reference;
          ctrl.OtherImages = [];
          ctrl.venueMainImg = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + ctrl.venueMainImgRef + '&key=AIzaSyAf466T-Gg01djruv0MXZ4-9ws8MapLhK8';
          for (var i = 1; i < response.data.result.photos.length; i++) {
            ctrl.OtherImages.push({ img: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + response.data.result.photos[i].photo_reference + '&key=AIzaSyAf466T-Gg01djruv0MXZ4-9ws8MapLhK8' });
          }
          $log.log(ctrl.OtherImages);
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $ionicLoading.hide();
          $log.log(error);
        });
    });
    //$ionicConfig.tabs.position('top');
    ctrl.isFavoriteActive = false;
    ctrl.activeFavorite = function () {
      ctrl.isFavoriteActive = ctrl.isFavoriteActive ? false : true;
    };
    ctrl.goBack = function () {
      $state.go('main.list');
    };
  });
