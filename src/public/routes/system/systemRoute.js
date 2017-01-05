/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.system', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('system', {
        url: '/system',
        templateUrl: 'views/system/system_list.html',
        controller: 'SystemController'
      })
  });