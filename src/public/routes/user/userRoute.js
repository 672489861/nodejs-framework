/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.user', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'UserController'
    }).state('user', {
      url: '/user',
      templateUrl: 'views/user/user_list.html',
      controller: 'UserController'
    }).state('userAdd', {
      url: '/userAdd',
      templateUrl: 'views/user/user_add.html',
      controller: 'UserController'
    }).state('userDetail', {
      url: '/user/:id',
      templateUrl: 'views/user/user_detail.html',
      controller: 'UserDetailController'
    })
  });