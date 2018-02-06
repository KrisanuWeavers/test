'use strict';
angular.module('main')
  .controller('ChangePasswordCtrl', function ($log, $ionicPopup, Store, $localStorage) {
    $log.log('Hello from your Controller: ChangePasswordCtrl in module main:. This is your controller:', this);
    var ctrl = this;
    $log.log($localStorage.savedUser.token);

    ctrl.changePassword = function () {
      if (ctrl.newPass !== ctrl.confirmPass) {
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
            $log.log(response);
            $localStorage.savedUser.upass = ctrl.newPass;
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
            $log.log(error);
            // $ionicPopup.show({
            //   title: 'Warning',
            //   subTitle: 'Old password is not correct !',
            //   buttons: [
            //     {
            //       text: '<b>Ok</b>',
            //       type: 'button-positive'
            //     }
            //   ]
            // });
          });
      }
    };
  });
