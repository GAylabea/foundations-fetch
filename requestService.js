;(function () {
  angular.module('fetchApp').service('requestService', function ($http) {
    // if (requestService == 'GET') {
    this.get = (url) => $http.get(url);
  // } else if (requestService == 'POST')
    // will need to add post, options and head
    // this.get = (url) => $http.post(url);
    // console.log("POST");
  });
})();
