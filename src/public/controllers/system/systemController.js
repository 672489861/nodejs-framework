/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.system')
  .controller('SystemController', ['$scope', '$http', function ($scope, $http) {

    $http.get('/system').success(function (data) {
      console.log(data);
      $scope.systems = data;
    }).error(function (err) {
      console.log('Error: ', err);
      if (err.status === 401) {
        location.href = '/login.html';
      }
    });

  }]);