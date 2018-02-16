'use strict';
angular.module('main')
  .controller('ListCtrl', function ($localStorage, $log, $scope, $rootScope, $filter, $cordovaGeolocation, $state, $ionicScrollDelegate, Store, $ionicLoading) {
    var ctrl = this;
    ctrl.list = [];
    ctrl.header = [];
    ctrl.hederIndex = 0;
    ctrl.header.push({ name: 'featured events', type: 'event' });
    ctrl.header.push({ name: 'pizza', type: 'pizza' });
    ctrl.header.push({ name: 'happy hour', type: 'happy' });
    ctrl.header.push({ name: 'venues', type: 'venue' });

    ctrl.listType = '';
    $log.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);
    ctrl.getList = function (type, $index) {
      ctrl.hederIndex = $index;
      if (type === 'venue') {
        ctrl.listType = type;
        $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
        Store.getVenue()
          .then(function (response) {
            $ionicLoading.hide();
            ctrl.venue = [];
            $log.log('======Venue List=======');
            $log.log(response);
            for (var i = 0; i < response.data.results.length; i++) {
              ctrl.list.push({ id: response.data.results[i].place_id, name: response.data.results[i].name, icon: response.data.results[i].icon });
            }
          }).catch(function (error) {
            //ctrl.isAnyLatest = false;
            $ionicLoading.hide();
            $log.log(error);
          });
      } else {
        ctrl.list = [];
      }
    };
    ctrl.listDetails = function (placeId) {
      if (ctrl.listType === 'venue') {
        $state.go('venue.info', { placeid: placeId });
      } else {
        $state.go('eventDetails');
      }
    };
    /*==================================================
       Active or Inactive Calender Icon
    ==================================================*/
    $scope.hideKeyBoard = function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.close();
      }
    };
    /*========================================
        SHOW HIDE TOP CALENDER
    ==========================================*/
    $scope.IsVisible = false;
    ctrl.calenderClass = 'calender-top';
    $scope.ShowHide = function () {
      //If DIV is visible it will be hidden and vice versa.
      $scope.IsVisible = $scope.IsVisible ? false : true;
      ctrl.index = 0;
      ctrl.today = $filter('date')(Date.now(), 'dd');
    };
    /*************************************
    * END HIDE TOP CALENDER
    **************************************/
    /*=====================================
        SHOW TOP SEARCH
    =======================================*/
    $scope.IsVisibleSerach = false;
    $scope.ShowSearch = function () {
      //If DIV is visible it will be hidden and vice versa.
      $scope.IsVisibleSerach = $scope.IsVisibleSerach ? false : true;
      $ionicScrollDelegate.freezeAllScrolls(true);
      $scope.searchTxt = 'Start Typing...';
      if (window.cordova && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.show();
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      $ionicScrollDelegate.scrollTop();
    };
    ctrl.showSearchBack = function () {
      //If DIV is visible it will be hidden and vice versa.
      $scope.IsVisibleSerach = false;
    };
    $scope.closeSearch = function () {
      //If DIV is visible it will be hidden and vice versa.
      $ionicScrollDelegate.freezeAllScrolls(false);
      $scope.IsVisibleSerach = false;
      if (window.cordova && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.close();
      }
    };
    /*************************************
    * END TOP SEARCH
    **************************************/
    /*=====================================
        SHOW MAP
    =======================================*/
    $scope.IsMapVisible = false;
    $scope.showMap = function () {
      //If DIV is visible it will be hidden and vice versa.
      $ionicScrollDelegate.freezeAllScrolls(true);
      $scope.IsMapVisible = $scope.IsMapVisible ? false : true;
      if ($scope.IsMapVisible) {
        $ionicScrollDelegate.freezeAllScrolls(true);
      }
      else {
        $ionicScrollDelegate.freezeAllScrolls(false);
      }
      var options = { timeout: 10000, enableHighAccuracy: true };
      $cordovaGeolocation.getCurrentPosition(options).then(function () {
        // eslint-disable-next-line no-undef
        var latlng = new google.maps.LatLng(39.305, -76.617);
        // eslint-disable-next-line no-undef
        var map = new google.maps.Map(document.getElementById('map-div'), {
          center: latlng,
          zoom: 16
        });
        // eslint-disable-next-line no-undef
        ctrl.marker = new google.maps.Marker({
          position: latlng,
          map: map,
          icon: 'main/assets/images/ic_map_marker_blue.png'
        });
        ctrl.marker.set('my_value', 1);
        // eslint-disable-next-line no-undef
        google.maps.event.addListener(ctrl.marker, 'click', function () {
          //alert(ctrl.marker.get('my_value'));
          $state.go('eventDetails');
        });
      }, function (error) {
        $log.log(error);
      });
    };
    $scope.$on('$ionicView.leave', function () {
      $scope.IsMapVisible = false;
      $ionicScrollDelegate.freezeAllScrolls(false);
    });
    /*************************************
    * END OF MAP
    **************************************/
    ctrl.calDateSelect = function ($index, day) {
      ctrl.index = $index;
      ctrl.today = day;
    };
    /*==================================================
        Section: Initialize
    ==================================================*/
    ctrl.initialize = function () {
      ctrl.ctrlCalenderImagePath = 'main/assets/images/ic_calendar.png';
      //var date = Date.now();
      ctrl.today = $filter('date')(Date.now(), 'dd');
      //$log.log(ctrl.today);
      var startDate = new Date();
      ctrl.aryDates = [];
      ctrl.aryDay = [];
      for (var i = 0; i < 7; i++) {
        var currentDate = ctrl.newFunction();
        currentDate.setDate(startDate.getDate() + i);
        ctrl.aryDates.push({ dayName: ctrl.DayAsString(currentDate.getDay()), day: currentDate.getDate() });
        //ctrl.aryDay.push(currentDate.getDate());
      }
      $log.log(ctrl.aryDates);
      $log.log(ctrl.aryDay);
      ctrl.index = 0;
    };

    ctrl.DayAsString = function (dayIndex) {
      var weekdays = new Array(7);
      weekdays[0] = 'Sun';
      weekdays[1] = 'Mon';
      weekdays[2] = 'Tue';
      weekdays[3] = 'Wed';
      weekdays[4] = 'Thu';
      weekdays[5] = 'Fri';
      weekdays[6] = 'Sat';
      return weekdays[dayIndex];
    };
    ctrl.newFunction = function () {
      var currentDate = new Date();
      return currentDate;
    };
    /*==================================================
    End: Initialize
    ==================================================*/
    ctrl.initialize();
  });

