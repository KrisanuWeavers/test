'use strict';
angular.module('main')
  .controller('ForgotPasswordCtrl', function ($log, $state, Store, $ionicPopup, $ionicLoading) {
    $log.log('Hello from your Controller: ForgotPasswordCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.sendEmail = function () {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      Store.userForgotPassword(ctrl.email)
        .then(function (response) {
          $log.log('======Forgot Password=======');
          $log.log(response);
          if (response.data.status === 200) {
            $ionicLoading.hide();
            $ionicPopup.show({
              title: 'Message',
              subTitle: 'A link has been sent to your email. Please follow the instructions carefully.',
              buttons: [
                {
                  text: 'Ok',
                  type: 'button-positive',
                  onTap: function () {
                    $state.go('signin');
                  }
                },
              ]
            });
          }
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $log.log('======Forgot Password Error=======');
          $log.log(error);
          $ionicLoading.hide();
          if (error.data.status === 404) {
            $ionicPopup.show({
              title: 'Warning',
              subTitle: 'User not found !',
              buttons: [
                {
                  text: '<b>Ok</b>',
                  type: 'button-positive'
                }
              ]
            });
          }
        });
    };
  });
