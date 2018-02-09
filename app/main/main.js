'use strict';
angular.module('main', [
  'ionic',
  'ngStorage',
  'ngCordova',
  'ui.router',
  'ksSwiper',
  'ionic-datepicker'
  // TODO: load other modules selected during generation
])
  .config(function ($stateProvider, $urlRouterProvider) {

    // ROUTING with ui.router
    $urlRouterProvider.otherwise('/signin');
    $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('splash', {
        url: '/splash',
        templateUrl: 'main/templates/splash.html',
        controller: 'SplashCtrl as ctrl'
      })
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
            controller: 'ListCtrl as ctrl'
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
      .state('main.setting', {
        url: '/profile/setting',
        views: {
          'tab-profile': {
            templateUrl: 'main/templates/setting.html',
            controller: 'SettingCtrl as ctrl'
          }
        }
      })
      .state('edit-profile', {
        url: '/edit-profile',
        templateUrl: 'main/templates/edit-profile.html',
        controller: 'EditProfileCtrl as ctrl'
      })
      .state('change-password', {
        url: '/change-password',
        templateUrl: 'main/templates/change-password.html',
        controller: 'ChangePasswordCtrl as ctrl'
      })
      .state('reset-password', {
        url: '/reset-password',
        templateUrl: 'main/templates/reset-password.html',
        controller: 'ResetPasswordCtrl as ctrl'
      })
      .state('phone', {
        url: '/phone',
        templateUrl: 'main/templates/phone.html',
        controller: 'PhoneCtrl as ctrl'
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
      })
      .state('venue', {
        url: '/venue',
        abstract: true,
        templateUrl: 'main/templates/tabs-venue.html'
      })
      .state('venue.info', {
        url: '/info',
        views: {
          'tab-venue-info': {
            templateUrl: 'main/templates/venue-info.html',
            controller: 'VenueInfoCtrl as ctrl'
          }
        }
      })
      .state('venue.events', {
        url: '/events',
        views: {
          'tab-venue-events': {
            templateUrl: 'main/templates/venue-events.html',
            controller: 'VenueEventsCtrl as ctrl'
          }
        }
      })
      .state('venue.articles', {
        url: '/articles',
        views: {
          'tab-venue-articles': {
            templateUrl: 'main/templates/venue-articles.html',
            controller: 'VenueArticlesCtrl as ctrl'
          }
        }
      })
      // .state('venueInfo', {
      //   url: '/venue-info',
      //   templateUrl: 'main/templates/venue-info.html',
      //   controller: 'VenueInfoCtrl as ctrl'
      // })
      // .state('VenueEvents', {
      //   url: '/venue-events',
      //   templateUrl: 'main/templates/venue-events.html',
      //   controller: 'VenueEventsCtrl as ctrl'
      // })
      // .state('VenueArticles', {
      //   url: '/venue-articles',
      //   templateUrl: 'main/templates/venue-articles.html',
      //   controller: 'VenueArticlesCtrl as ctrl'
      // })
      .state('articleDetails', {
        url: '/article-details/:id',
        templateUrl: 'main/templates/article-details.html',
        controller: 'ArticleDetailsCtrl as ctrl'
      });
  })
  .config(function ($ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(5);
    // note that you can also chain configs
    $ionicConfigProvider.backButton.text('').icon('ion-android-arrow-back').previousTitleText(false);
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
  });

