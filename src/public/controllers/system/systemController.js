/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.system')
  .controller('SystemController', ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.system = {};
    $scope.formData = {};

    // get
    $http.get('/system').success(function (data) {
      $scope.systems = data;
    }).error(function (err) {
      console.log('Error: ', err);
    });

    // delete
    $scope.deleteSystem = function (id) {
      $http.delete('/system/' + id).success(function (data) {
        $scope.system = {};
        $scope.systems = data;
      }).error(function (err) {
        console.log('Error : ', err);
      })
    };

    $scope.gotoDetailPage = function (id) {
      $state.go('systemDetail', {id: id});
    };

    // search detail with id
    $scope.getSystem = function (id) {
      $http.get('/system/' + id).success(function (data) {
        $scope.system = data;
      }).error(function (err) {
        console.log('Error :', err);
      });
    };

    // update
    $scope.updateSystem = function () {
      $http.put('/system/' + id).success(function (data) {
        $scope.system = {};
        $scope.systems = data;
      }).error(function (err) {
        console.log('Error :', err);
      });
    };

    // add
    $scope.addSystem = function () {
      $http.post('/system/', $scope.formData).success(function (result) {
        $scope.formData = {};
        if (result) {
          $state.go('system');
        }
      }).error(function (err) {
        console.log('Error : ', err);
      })
    };

  }]);