'use strict';

/**
 * @ngdoc overview
 * @name todolistApp
 * @description
 * # todolistApp
 *
 * Main module of the application.
 */
angular
  .module('todolistApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.sortable',
	'ui.calendar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
