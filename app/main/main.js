'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ksSwiper'
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider) {

    // ROUTING with ui.router
    //$urlRouterProvider.otherwise('/home');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('home', {
        url: '/home',
        templateUrl: 'main/templates/signup.html',
        controller: 'SignupCtrl as ctrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'main/templates/signup.html',
        controller: 'SignupCtrl as ctrl'
      })
      .state('signup-com', {
        url: '/signup-com',
        templateUrl: 'main/templates/signup-com.html',
        controller: 'SignupComCtrl as ctrl'
      })
      .state('signin', {
        url: '/signin',
        templateUrl: 'main/templates/signin.html',
        controller: 'SignupCtrl as ctrl'
      })
      .state('forgot-password', {
        url: '/forgot-password',
        templateUrl: 'main/templates/forgot-password.html',
        controller: 'ForgotPasswordCtrl as ctrl'
      })
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html'
      })
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
  });
