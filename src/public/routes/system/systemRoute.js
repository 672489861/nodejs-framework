/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.system', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('system', {
      url: '/system',
      templateUrl: 'views/system/system_list.html',
      controller: 'SystemController'
    }).state('systemAdd', {
      url: '/systemAdd',
      templateUrl: 'views/system/system__add.html',
      controller: 'SystemController'
    }).state('systemDetail', {
      url: '/system/:id',
      templateUrl: 'views/system/system_detail.html',
      controller: function ($scope, $state, $stateParams) {
        $scope.getSystem($scope, $state, $stateParams);
      }
    })
  });