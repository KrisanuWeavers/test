'use strict';
angular.module('main')
  .controller('ChangePasswordCtrl', function ($log, $ionicPopup, Store, $localStorage, $ionicLoading) {
    $log.log('Hello from your Controller: ChangePasswordCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    ctrl.changePassword = function () {
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
        Store.changeUserPassword(ctrl.oldPass, ctrl.newPass, ctrl.confirmPass, $localStorage.savedUser.token)
          .then(function (response) {
            $log.log('======Change Password=======');
            $ionicLoading.hide();
            $log.log(response);
            window.localStorage.setItem('userPass', ctrl.newPass);
            $ionicPopup.show({
              title: 'Meesage',
              subTitle: 'Your password is changed successfully.',
              buttons: [
                {
                  text: '<b>Ok</b>',
                  type: 'button-positive'
                }
              ]
            });
          }).catch(function (error) {
            $ionicLoading.hide();
            $log.log(error);
            if (error.data.status === 400) {
              $ionicPopup.show({
                title: 'Warning',
                subTitle: 'Old password is not correct !',
                buttons: [
                  {
                    text: '<b>Ok</b>',
                    type: 'button-positive'
                  }
                ]
              });
            }
          });
      }
    };
  });
