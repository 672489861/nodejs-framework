/**
 * Created by Arnold on 2017/1/6.
 */
angular.module('app.user')
  .controller('UserDetailController', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state) {

    // search detail with id
    $http.get('/user/' + $stateParams.id).success(function (result) {
      $scope.user = result.obj;
    }).error(function (err) {
      console.log('Error :', err);
    });

    // update
    $scope.updateSystem = function () {
      $http.put('/user/' + $scope.user.id, {name: $scope.user.name}).success(function (result) {
        $scope.user = {};
        if (result) {
          $state.go('user');
        }
      }).error(function (err) {
        console.log('Error :', err);
      });
    };
  }]);