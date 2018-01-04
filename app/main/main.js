'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ksSwiper'
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/signin');
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
        controller: 'SigninCtrl as ctrl'
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
      .state('main.articles', {
        url: '/articles',
        views: {
          'tab-articles': {
            templateUrl: 'main/templates/articles.html',
            controller: 'ArticlesCtrl as ctrl'
          }
        }
      })
      .state('main.alerts', {
        url: '/alerts',
        views: {
          'tab-alerts': {
            templateUrl: 'main/templates/alerts.html',
            controller: 'AlertsCtrl as ctrl'
          }
        }
      })
      .state('main.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'main/templates/profile.html',
            controller: 'ProfileCtrl as ctrl'
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
      })
      .state('eventDetails', {
        url: '/event-details',
        templateUrl: 'main/templates/event-details.html',
        controller: 'EventDetailsCtrl as ctrl'
      });
  })
  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(5);
    // note that you can also chain configs
    $ionicConfigProvider.backButton.text('').icon('ion-android-arrow-back').previousTitleText(false);
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
  });
