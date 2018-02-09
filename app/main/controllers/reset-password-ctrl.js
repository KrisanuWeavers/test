'use strict';
angular.module('main')
  .controller('ResetPasswordCtrl', function ($log, Store, $ionicPopup, $state, $ionicLoading) {
    $log.log('Hello from your Controller: ResetPasswordCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    $log.log(ctrl);
    var url = window.localStorage.getItem('url');
    var token = url.split('=');
    $log.log(token[1]);
    ctrl.resetPassword = function () {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      if (ctrl.newPass !== ctrl.confirmPass) {
        $ionicLoading.hide();
        $ionicPopup.show({
          title: 'Warning',
          subTitle: 'New password does not match with confirm password !',
          buttons: [
            {
              text: '<b>Ok</b>',
              type: 'button-positive'
            }
          ]
        });
      } else {
        Store.userResetPassword(token, ctrl.newPass)
          .then(function (response) {
            $log.log('======Reset Password=======');
            window.localStorage.setItem('userPass', ctrl.newPass);
            $ionicLoading.hide();
            $log.log(response);
            $ionicPopup.show({
              title: 'Message',
              subTitle: 'Your password has been reset successfully',
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
          }).catch(function (error) {
            //ctrl.isAnyLatest = false;
            $log.log(error);
            $ionicLoading.hide();
          });
      }
    };
  });
