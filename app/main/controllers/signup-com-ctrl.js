'use strict';
angular.module('main')
  .controller('SignupComCtrl', function ($scope, $window, $log, $state, $filter, $rootScope, getSignUpData, $ionicPopup, Store, $localStorage) {

    $log.log('Hello from your Controller: SignupComCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.finalSignUpAr = getSignUpData.getData();
    //$log.log(ctrl.finalSignUpAr);
    ctrl.savedUserLogin = {
      'uname': null,
      'uemail': null,
      'upass': null
    };
    window.localStorage.setItem('userName', ctrl.finalSignUpAr['username']);
    window.localStorage.setItem('userPass', ctrl.finalSignUpAr['password']);
    ctrl.savedUserLogin.uname = ctrl.finalSignUpAr['username'];
    ctrl.savedUserLogin.uemail = ctrl.finalSignUpAr['email'];
    ctrl.savedUserLogin.upass = ctrl.finalSignUpAr['password'];
    $localStorage.savedUserLogin = JSON.parse(JSON.stringify(ctrl.savedUserLogin));
    $log.log($localStorage.savedUserLogin);
    ctrl.saveFavorites = function () {
      ctrl.favouriteSelected = [];
      var selectedRows = $filter('filter')(ctrl.favourites, {
        selected: true
      }, true);
      ctrl.selectedItems = selectedRows;
      ctrl.finalSignUpAr = getSignUpData.getData();
      for (var i = 0; i < ctrl.selectedItems.length; i++) {
        ctrl.favouriteSelected.push(ctrl.selectedItems[i].favTitle);
      }
      ctrl.finalSignUpAr['favorites'] = ctrl.favouriteSelected;
      $log.log(ctrl.finalSignUpAr['favorites']);
      if (ctrl.selectedItems.length < 3) {
        $ionicPopup.show({
          title: 'Warning',
          subTitle: 'Must picked up at least 3 !',
          buttons: [
            {
              text: '<b>Ok</b>',
              type: 'button-positive'
            }
          ]
        });
      } else {
        Store.userSignUp(ctrl.finalSignUpAr)
          .then(function (response) {
            $log.log('======Signup Data=======');
            $log.log(response);
          }).catch(function (error) {
            //ctrl.isAnyLatest = false;
            $state.go('signin');
            $log.log(error);
          });
      }
    };
    // $scope.$on('$ionicView.leave', function () {
    //   $window.location.reload();
    // });
    ctrl.isFavouritesSelect = function (favouriteItems) {
      favouriteItems.selected ? favouriteItems.selected = false : favouriteItems.selected = true;
    };
    /*==================================================
        Section: Initialize
    ==================================================*/
    ctrl.initialize = function () {
      ctrl.favourites = [];
      ctrl.favouriteSelected = [];
      ctrl.selectedItems = [];
      ctrl.finalSignUpAr = [];
      ctrl.favourites.push({ favTitle: 'Gaming' });
      ctrl.favourites.push({ favTitle: 'Gaming' });
      ctrl.favourites.push({ favTitle: 'Gaming' });
      ctrl.favourites.push({ favTitle: 'Gaming' });
      $log.log(ctrl.favourites);
    };
    /*==================================================
   End: Initialize
   ==================================================*/
    ctrl.initialize();
  });
