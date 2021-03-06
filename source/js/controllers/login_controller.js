(function () {
   'use strict';
     
  Roskilde.Controllers.
    controller('LoginCtrl',['$scope','$localStorage', '$location', 'eventick', function ($scope, $localStorage, $location, eventick) {
    $scope.$emit('bodyClass', 'user-login');
    $scope.$storage = $localStorage;

    $scope.token = '';
    $scope.events = '';
    $scope.myEvent = '';
    $scope.loginForm = true;
    $scope.erroMessage = false;

    if($scope.$storage.token && $scope.$storage.eventId){
      $scope.loadAttendee();
      $location.path('/');
    }

    $scope.signIn = function() {
      eventick.getToken($scope.user).then(function(value) {
        $scope.token = value.data.token;
        $scope.$storage.token = value.data.token;

        eventick.getEvents($scope.token).then(function(value) {
          $scope.events = value.data.events;
          $scope.loginForm = false;
        });
      }, function(reason) {
        $scope.erroMessage = true;
      });
    };

    $scope.chooseEvent = function() {
      $scope.$storage.eventId = $scope.myEvent.id;
      $scope.loadAttendee();
      $location.path('/');
    };
  }]);

}());
