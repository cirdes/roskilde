(function () {
   'use strict';

  Roskilde.Controllers.
    controller('MainCtrl',['$scope', '$location', '$localStorage','eventick', '$timeout', function($scope, $location, $localStorage, eventick, $timeout) {

    $scope.$storage = $localStorage;

    if(!$scope.$storage.token || !$scope.$storage.eventId){
      $scope.bodyClass = '';
      $location.path('login');
    }

    if($location.path() === '/'){
      $scope.bodyClass = 'admin';
    }

    $scope.loadAttendee = function() {
      if(typeof $scope.$storage.attendees === 'undefined'){
        $scope.syncAttendee();
      }else{
        $scope.attendees = $scope.$storage.attendees;
      }
    };

    $scope.updateAttendeeStorage = function() {
      $scope.$storage.attendees = $scope.attendees;
    };

    $scope.logout = function() {
      $scope.$storage.$reset();
      $scope.bodyClass = '';
      $location.path('login');
    };

    $scope.syncEventick = function(a) {
      eventick.getAttendees().then(function(value) {
        $scope.attendees = value.data.attendees;
        $scope.$storage.attendees = value.data.attendees;
      });
    };

    $scope.lightboxSuccess = false;

    $scope.raffle = function() {
      $timeout(function(){
        $scope.lightboxSuccess = false;
        $scope.scanning = false;
      }, 3000);
      var attendee = _.sample($scope.attendees);

      $scope.attendee_name = attendee.name;
      $scope.attendee_email = attendee.email;

      $scope.lightboxSuccess = true;
    };

    $scope.syncAttendee = function(a) {
      eventick.getAttendees($scope.$storage.token, $scope.$storage.eventId).then(function(value) {
        $scope.attendees = value.data.attendees;
        $scope.$storage.attendees = value.data.attendees;
      });
    };

    $scope.loadAttendee();
  }]);

}());
