var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/index', {
      templateUrl: 'partials/index.html',
      controller: 'indexController'
    })

    .when('/new', {
      templateUrl: 'partials/newUser.html',
      controller: 'newController'
    })

    .when('/edit/:_id', {
      templateUrl: 'partials/update.html',
      controller: 'updateController'
    })
    .when('/show/:_id', {
      templateUrl: 'partials/show.html',
      controller: 'showController'
    })
    .when('/delete/:_id', {
      templateUrl: '',
      controller: 'indexController'
    })
    .otherwise('/new');
});
