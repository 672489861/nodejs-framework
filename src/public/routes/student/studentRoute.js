/**
 * Created by Arnold on 2017/1/5.
 */
angular.module('app.student', [])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('student', {
        url: '/student',
        templateUrl: '../../views/student/student_list.html',
        controller: 'StudentController'
      })
  });