app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',

  })
  .when('/dash', {
    templateUrl: 'partials/dashboard.html',

  })
  .when('/newAppointment', {
    templateUrl: 'partials/newAppointment.html',

  })
  .otherwise('/')
})
