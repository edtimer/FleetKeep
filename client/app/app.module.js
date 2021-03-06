(function() {
  'use strict';

  angular
    .module('fleetkeep', ['ui.router', 'highcharts-ng'])
    .config(config);
    // .run(run);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

    // run.$inject = ['$rootScope', '$stateProvider', '$window'];

    function config($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl as ctrl',
        })
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl as ctrl',
          preventWhenLoggedIn: true
        })
        .state('report', {
          url: '/report',
          templateUrl: 'views/report.html',
          controller: 'ReportCtrl as ctrl',
          restricted: true
        })
        .state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html',
          controller: 'LoginCtrl as ctrl',
          preventWhenLoggedIn: true
        })
        .state('dash', {
          url: '/dash',
          templateUrl: 'views/dash.html',
          controller: 'DashCtrl as ctrl',
          restricted: true
        })
        .state('review', {
          url:'/review/:id',
          templateUrl: 'views/review.html',
          controller: 'ReviewCtrl as ctrl',
          restricted: true
        })
        .state('confirm', {
          url:'/confirm/:id',
          templateUrl: 'views/confirm.html',
          controller: 'ConfirmCtrl as ctrl'
        })
        .state('driver', {
          url:'/driver',
          templateUrl:'views/driver.html',
          controller: 'DashCtrl as ctrl'
        });

        $httpProvider.interceptors.push('AuthInterceptor');
    }

  //   function run($rootScope, $stateProvider, $window) {
  //    $rootScope.$on('$stateChangeStart', function (event, next, current) {
   //
  //      if (next.restricted && !$window.localStorage.getItem("user") ) {
  //        if(current && current.signup){
  //          $state.go('home');
  //        } else if (next.restricted && $window.localStorage.getItem('user') != 1) {
  //          $location.path('/');
  //        }
  //          $location.path('/#/login');
  //      }
   //
  //      if (next.preventWhenLoggedIn && $window.localStorage.getItem("token")) {
  //        $location.path('/');
  //      }
  //    });
  //  };
})();
