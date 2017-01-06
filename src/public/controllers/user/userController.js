/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.user')
  .controller('UserController', ['$scope', '$http', '$state', function ($scope, $http, $state) {

    $scope.user = {};
    $scope.formData = {};

    // get
    $http.get('/user').success(function (data) {
      $scope.users = data.obj;
    }).error(function (err) {
      console.log('Error: ', err);
    });

    // delete
    $scope.deleteUser = function (id) {
      $http.delete('/user/' + id).success(function (data) {
        $scope.user = {};
        $scope.users = data.obj;
      }).error(function (err) {
        console.log('Error : ', err);
      })
    };

    $scope.gotoDetailPage = function (id) {
      $state.go('userDetail', {id: id});
    };

    // add
    $scope.addUser = function () {
      $http.post('/user/', $scope.formData).success(function (result) {
        $scope.formData = {};
        if (result) {
          $state.go('user');
        }
      }).error(function (err) {
        console.log('Error : ', err);
      })
    };

  }]);