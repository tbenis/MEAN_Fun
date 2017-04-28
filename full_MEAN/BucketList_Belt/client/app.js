app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl: 'partials/login.html',

  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',

  })
  .when('/user/:id', {
    templateUrl: 'partials/userDashboard.html',

  })
  .otherwise('/dashboard')
})
