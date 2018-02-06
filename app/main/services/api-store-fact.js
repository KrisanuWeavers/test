'use strict';
angular.module('main')
  .factory('Store', function (
    $log,
    $http,
    $q,
    Config
  ) {

    $log.log('Hello from your Service: Api Store Fact in module store');

    return {
      userSignUp: function (finalSignUpAr) {
        var param = {
          'device_id': '987456321',
          'first_name': finalSignUpAr['first_name'],
          'last_name': finalSignUpAr['last_name'],
          'email': finalSignUpAr['email'],
          'username': finalSignUpAr['username'],
          'password': finalSignUpAr['password'],
          'favorites': finalSignUpAr['favorites']
        };
        return $http.post(Config.ENV.SERVER_URL + 'user/sign-up', param, {
          transformResponse: function (response) {
            var data = JSON.stringify(response);
            var dataParse = JSON.parse(data);
            return dataParse;
          }
        });
      },
      userSignIn: function (userName, userPass) {
        var param = {
          'device_id': '1237894563',
          'login': userName,
          'password': userPass
        };
        return $http.post(Config.ENV.SERVER_URL + 'user/sign-in', param, {
          transformResponse: function (response) {
            var dataParse = JSON.parse(response);
            return dataParse;
          }
        });
      },
      userExist: function (uname, uemail) {
        var username = uname;
        var email = uemail;
        return $http.get(Config.ENV.SERVER_URL + 'user/exists?username=' + username + '&email=' + email)
          .then(function (response) {
            var data = JSON.stringify(response);
            var dataParse = JSON.parse(data);
            return dataParse;
          });
      },
      getArticles: function (jwtToken) {
        var lat = '40.7253944';
        var lon = '-73.94464210000001';
        var token = Config.ENV.AUTH_APPEND + jwtToken;
        return $http.get(Config.ENV.SERVER_URL + 'articles/featured?user_lat=' + lat + '&user_lon=' + lon, {
          headers: {
            'Authorization': token
          }
        }).then(function (response) {
          var data = JSON.stringify(response);
          var dataParse = JSON.parse(data);
          return dataParse;
        });
      },
      getProfile: function (jwtToken, id) {
        var token = Config.ENV.AUTH_APPEND + jwtToken;
        return $http.get(Config.ENV.SERVER_URL + 'user/profile/' + id, {
          headers: {
            'Authorization': token
          }
        }).then(function (response) {
          var data = JSON.stringify(response);
          var dataParse = JSON.parse(data);
          return dataParse;
        });
      },
      userEditProfile: function (fname, lname, email, dob, gender, website, bio, jwtToken) {
        var param = {
          'picture': 'http://pngimg.com/uploads/baby/baby_PNG17919.png',
          'first_name': fname,
          'last_name': lname,
          'email': email,
          'birthday': dob,
          'gender': gender,
          'website': website,
          'bio': bio
        };
        return $http.post(Config.ENV.SERVER_URL + 'user/profile/edit/', param, {
          headers: {
            'Authorization': Config.ENV.AUTH_APPEND + jwtToken,
          }
        }).then(function (response) {
          var data = JSON.stringify(response);
          var dataParse = JSON.parse(data);
          return dataParse;
        });
      },
      changeUserPassword: function (oldPass, newPass, confirmPass, jwtToken) {
        var param = {
          'old_password': oldPass,
          'new_password': newPass,
          'repeat_password': confirmPass
        };
        return $http.patch(Config.ENV.SERVER_URL + 'user/change-password', param, {
          headers: {
            'Authorization': Config.ENV.AUTH_APPEND + jwtToken
          }
        }).then(function (response) {
          var data = JSON.stringify(response);
          var dataParse = JSON.parse(data);
          return dataParse;
        });
      },
      userResetPassword: function (userToken, userPass) {
        var param = {
          'token': userToken,
          'password': userPass
        };
        return $http.post(Config.ENV.SERVER_URL + 'user/reset-password', param, {
          transformResponse: function (response) {
            var dataParse = JSON.parse(response);
            return dataParse;
          }
        });
      },
    };
  });
