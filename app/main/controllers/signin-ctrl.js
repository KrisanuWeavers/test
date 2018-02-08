'use strict';
angular.module('main')
  .controller('SigninCtrl', function ($rootScope, $scope, $log, $state, $timeout, getSignUpData, Config, Store, $localStorage, $ionicPopup, $ionicLoading) {
    $log.log('Hello from your Controller: SigninCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.isSignInVisible = false;
    $timeout(function () {
      ctrl.isSignInVisible = true;
    }, 1055);
    ctrl.savedUser = {
      'deviceId': null,
      'token': null,
      'userId': null,
      'fname': null,
      'lname': null,
      'uname': null,
      'uemail': null,
      'upass': null,
      'favorites': null
    };
    $scope.$on('$ionicView.afterEnter', function () {
      if (window.localStorage.getItem('token') !== null) {
        $state.go('main.list');
      }
    });

    ctrl.signIn = function () {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      Store.userSignIn(ctrl.uname, ctrl.upass)
        .then(function (response) {
          if (response.data.status === 200) {
            window.localStorage.setItem('userName', ctrl.uname);
            window.localStorage.setItem('userPass', ctrl.upass);
            window.localStorage.setItem('token', response.data.jwt.token);
            $ionicLoading.hide();
            $log.log('======SignIn Data=======');
            $log.log(response);
            ctrl.savedUser.deviceId = response.data.user.devices_id[0];
            ctrl.savedUser.token = response.data.jwt.token;
            ctrl.savedUser.userId = response.data.user.id;
            ctrl.savedUser.fname = response.data.user.first_name;
            ctrl.savedUser.lname = response.data.user.last_name;
            ctrl.savedUser.uname = response.data.user.username;
            ctrl.savedUser.uemail = response.data.user.email;
            ctrl.savedUser.upass = window.localStorage.getItem('userPass');
            ctrl.savedUser.favorites = response.data.user.favorites;
            $localStorage.savedUser = JSON.parse(JSON.stringify(ctrl.savedUser));

            Config.ENV.USER.DEVICE_ID = $localStorage.savedUser.deviceId;
            Config.ENV.USER.AUTH_TOKEN = $localStorage.savedUser.token;
            Config.ENV.USER.USER_ID = $localStorage.savedUser.userId;
            Config.ENV.USER.FNAME = $localStorage.savedUser.fname;
            Config.ENV.USER.LNAME = $localStorage.savedUser.lname;
            Config.ENV.USER.UNAME = $localStorage.savedUser.uname;
            Config.ENV.USER.UEMAIL = $localStorage.savedUser.uemail;
            Config.ENV.USER.UPASS = $localStorage.savedUser.upass;
            Config.ENV.USER.FAVOURITES = $localStorage.savedUser.favorites;
            $state.go('main.list');
          }
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $log.log(error);
          $ionicLoading.hide();
          $ionicPopup.show({
            title: 'Warning',
            subTitle: 'Authentication failed. Combination of login and password is not correct !',
            buttons: [
              {
                text: '<b>Ok</b>',
                type: 'button-positive'
              }
            ]
          });
        });
    };
    // ctrl.fbSignIn = function () {
    //   $state.go('main.list');
    // };
  });


function handleOpenURL (url) {
  if (url) {
    window.localStorage.setItem('url', url);
    window.location.href = '#/reset-password';
  }
}
handleOpenURL();
