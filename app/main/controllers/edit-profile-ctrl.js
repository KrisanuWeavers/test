'use strict';
angular.module('main')
  .controller('EditProfileCtrl', function ($filter, $scope, $log, ionicDatePicker, Store, $localStorage, $ionicPopup, $ionicLoading, $state) {
    var ctrl = this;
    $log.log('Hello from your Controller: EditProfileCtrl in module main:. This is your controller:', this);
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $scope.$on('$ionicView.afterEnter', function () {
      Store.getProfile($localStorage.savedUser.token, $localStorage.savedUser.userId)
        .then(function (response) {
          if (response.data.status === 200) {
            $ionicLoading.hide();
            $log.log('======User Profile Data=======');
            $log.log(response);
            if (response.data.user.picture === null) {
              ctrl.profileImageSrc = 'main/assets/images/ic_default_user_photo.png';
            } else {
              ctrl.profileImageSrc = response.data.user.picture;
            }
            ctrl.fname = response.data.user.first_name;
            ctrl.lname = response.data.user.last_name;
            ctrl.email = response.data.user.email;
            var date = new Date(response.data.user.birthday);
            var d = date.getDate();
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            if (m <= 9) {
              m = '0' + m;
            }
            if (d <= 9) {
              d = '0' + d;
            }
            ctrl.dob = m + '-' + d + '-' + y;
          }
          if (response.data.user.gender === 'male') {
            ctrl.gender = response.data.user.gender;
          }
          if (response.data.user.gender === 'female') {
            ctrl.gender = response.data.user.gender;
          }
          ctrl.webSite = response.data.user.website;
          ctrl.bio = response.data.user.bio;
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $log.log(error);
          $ionicLoading.hide();
        });
    });
    var ipObj1 = {
      callback: function (val) {  //Mandatory
        var date = new Date(val);
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        if (m <= 9) {
          m = '0' + m;
        }
        if (d <= 9) {
          d = '0' + d;
        }
        ctrl.dob = m + '-' + d + '-' + y;
      },
      from: new Date(1980, 1, 1),
      to: new Date(),
      closeOnSelect: true
    };
    $scope.$watch('ctrl.email', function (val) {
      ctrl.email = $filter('lowercase')(val);
    }, true);
    ctrl.openDatePickerOne = function () {
      ionicDatePicker.openDatePicker(ipObj1);
    };
    ctrl.saveProfile = function () {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
      var date = new Date(ctrl.dob);
      var d = date.getDate();
      var m = date.getMonth() + 1;
      var y = date.getFullYear();
      if (m <= 9) {
        m = '0' + m;
      }
      if (d <= 9) {
        d = '0' + d;
      }
      ctrl.bday = m + '-' + d + '-' + y;
      $log.log(ctrl.gender);
      $log.log(ctrl.fname);
      $log.log(ctrl.lname);
      $log.log(ctrl.email);
      $log.log(ctrl.bday);
      $log.log(ctrl.webSite);
      $log.log(ctrl.bio);
      $log.log($localStorage.savedUser.token);
      Store.userEditProfile(ctrl.fname, ctrl.lname, ctrl.email, ctrl.bday, ctrl.gender, ctrl.webSite, ctrl.bio, $localStorage.savedUser.token)
        .then(function () {
          $ionicLoading.hide();
          $ionicPopup.show({
            title: 'Message',
            subTitle: 'your profile has been updated successfully.',
            buttons: [
              {
                text: '<b>Ok</b>',
                type: 'button-positive'
              }
            ]
          });
        }).catch(function (error) {
          //ctrl.isAnyLatest = false;
          $ionicLoading.hide();
          $log.log(error);
        });
    };
    ctrl.goBack = function () {
      $state.go('main.profile');
    };
  });
