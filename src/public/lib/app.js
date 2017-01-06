/**
 * Created by Arnold on 2017/1/5.
 */
var app = angular.module('app', [
  'app.user'
]);

app.run(function ($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
    debugger;
    if (toState.name == 'login') {
      return;
    } else {
      // user not login
      if (!$rootScope.user || !$rootScope.user.token) {
        event.preventDefault(); // cancel default route change
        $state.go("login", {from: fromState.name, message: 'notLogin'});
      }
    }
  });
});