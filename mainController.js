;(function () {
  angular.module('fetchApp').controller('MainController', function ($scope, requestService, Response) {
    $scope.responses = [];
    $scope.url ;
    $scope.methods = [ 'GET', 'POST', 'OPTIONS', 'HEAD' ];
    $scope.selectMethod = "";

    // try using if/else 

    $scope.fetch = () => {
      // debugger
      if ($scope.selectMethod == 'GET') {
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push(response);
      }, (error) => {
        console.log("GET error");
      });
    } else if ($scope.selectMethod == "POST") {
      requestService.get($scope.url).then((success) => {
        const response = new Response(success);
        $scope.responses.push(response);
      }, (error) => {
        console.log("POST error");
      });      
    } else if ($scope.selectMethod == "HEAD") {
      requestService.get($scope.url).then ((success) => {
        const response = new Response(success);
        $scope.response.push(response);
      }, (error) => {
        console.log("HEAD error");
      });
    }
    };
  });
})();

