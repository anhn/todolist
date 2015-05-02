'use strict';

/**
 * @ngdoc function
 * @name todolistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todolistApp
 */
angular.module('todolistApp')
  .controller('CalendarCtrl', function ($scope) {
	$scope.eventSources = [];
	$scope.uiConfig = {
	      calendar:{
	        height: 450,
	        editable: true,
	        header:{
	          left: 'month basicWeek basicDay agendaWeek agendaDay',
	          center: 'title',
	          right: 'today prev,next'
	        },
	        dayClick: $scope.alertEventOnClick,
	        eventDrop: $scope.alertOnDrop,
	        eventResize: $scope.alertOnResize
	      }
	    };
  });
