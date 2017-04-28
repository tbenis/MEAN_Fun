var app = angular.module('myApp', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/user', {
      templateUrl: 'partials/loginOrReg.html',
      controller: 'userController'
    })
    .when('/user/:id', {
      templateUrl: 'partials/dashboard.html',
      controller: 'userController'
    })
    .otherwise('/user');
});
