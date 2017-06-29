'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.home',
  'myApp.save',
  'myApp.setting',
  'myApp.version',
]).
config(['$locationProvider','$stateProvider', function($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);
