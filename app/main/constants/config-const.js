'use strict';
angular.module('main').constant('Config', {
  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://api.hagtap.com/v2/',
    'SOME_OTHER_URL': 'http://52.37.154.246/v2/',
    'AUTH_APPEND': 'Bearer ',
    'USER': {
      'DEVICE_ID': '',
      'AUTH_TOKEN': '',
      'USER_ID': '',
      'FNAME': '',
      'LNAME': '',
      'UNAME': '',
      'UEMAIL': '',
      'UPASS': '',
      'FAVOURITES': ''
    }
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }
});
