angular.module('selfCheckin', ['selfCheckin.controllers', 'selfCheckin.services']);

angular.module('selfCheckin').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
   .when('/', {
    templateUrl: 'admin'
  }).when('/login', {
  templateUrl: 'login',
  controller: 'LoginCtrl',
});
});

var SelfCheckin = SelfCheckin || {};

SelfCheckin.Controllers = angular.module('selfCheckin.controllers', ['ngRoute', 'ui.gravatar', 'ngStorage']);
SelfCheckin.Services = angular.module('selfCheckin.services', []);
