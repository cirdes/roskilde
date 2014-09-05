(function () {
   'use strict';

  SelfCheckin.Services.
    factory('eventick',['$http', '$localStorage', function($http, $localStorage) {
    var storage = $localStorage;

    function tokenAuth() {
      return {'Authorization': 'Basic ' + btoa(storage.token + ':')};
    }

    function attendeesUrl() {
      return 'https://www.eventick.com.br/api/v1/events/' + storage.eventId + '/attendees.json';
    }

    var eventick = {
      getAttendees: function(){
        return $http({method: 'GET', url: attendeesUrl(), headers: tokenAuth()});
      },getToken: function(user){
        return $http({
          method: 'GET',
          url: 'https://www.eventick.com.br/api/v1/tokens.json',
           headers: {'Authorization': 'Basic ' + btoa(user.email + ':' + user.password)}
        });
      },
      getEvents: function(userToken){
        return $http({
          method: 'GET',
          url: 'https://www.eventick.com.br/api/v1/events.json',
           headers: {'Authorization': 'Basic ' + btoa(userToken + ':')}
          });
      }
    };

  return eventick;

  }]);
}());
