'use strict';
angular.module('main')
  .controller('SignupCtrl', function ($log, $state, $scope, getSignUpData, Store, $ionicPopup) {
    var ctrl = this;
    $log.log('Hello from your Controller: SignupCtrl in module main:. This is your controller:', this);
    ctrl.signUp = function () {
      //$scope.signUpArr['device_id'] = $cordovaDevice.getUUID();
      $scope.signUpArr['device_id'] = '987456321';
      $scope.signUpArr['first_name'] = ctrl.fname;
      $scope.signUpArr['last_name'] = ctrl.lname;
      $scope.signUpArr['email'] = ctrl.email;
      $scope.signUpArr['username'] = ctrl.uname;
      $scope.signUpArr['password'] = ctrl.password;
      getSignUpData.setData($scope.signUpArr);
      Store.userExist(ctrl.uname, ctrl.email)
        .then(function (response) {
          $log.log('======User Exists=======');
          if (response.data.status) {
            $log.log(response.data.emailExists);
            if (response.data.emailExists === 1 || response.data.usernameExists === 1) {
              $ionicPopup.show({
                title: 'Warning',
                subTitle: 'User exists...!',
                buttons: [
                  {
                    text: '<b>Ok</b>',
                    type: 'button-positive'
                  }
                ]
              });
            } else {
              $state.go('signup-com');
            }
          }
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $log.log(error);
        });
    };
    /*==================================================
          Section: Initialize
      ==================================================*/
    ctrl.initialize = function () {
      $scope.signUpArr = {
        'device_id': null,
        'first_name': null,
        'last_name': null,
        'email': null,
        'username': null,
        'password': null,
        'favorites': []
      };
    };
    /*==================================================
   End: Initialize
   ==================================================*/
    ctrl.initialize();

  });

