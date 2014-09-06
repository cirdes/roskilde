angular.module('roskilde', ['Roskilde.controllers', 'Roskilde.services']);

angular.module('roskilde').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
   .when('/', {
    templateUrl: 'admin'
  }).when('/login', {
  templateUrl: 'login',
  controller: 'LoginCtrl',
});
});

var Roskilde = Roskilde || {};

Roskilde.Controllers = angular.module('Roskilde.controllers', ['ngRoute', 'ui.gravatar', 'ngStorage']);
Roskilde.Services = angular.module('Roskilde.services', []);
