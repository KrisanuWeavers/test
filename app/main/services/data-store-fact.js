'use strict';
angular.module('main').factory('getSignUpData', function () {
  var signUpArr = {
    'device_id': null,
    'first_name': null,
    'last_name': null,
    'email': null,
    'username': null,
    'password': null,
    'favorites': []
  };
  return {
    getData: function () {
      return signUpArr;
    },
    setData: function (data) {
      signUpArr = data;
      return signUpArr;
    }
  };
});
