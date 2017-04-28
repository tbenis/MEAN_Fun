app.config(function($routeProvider){
  $routeProvider
  .when('/main', {
    templateUrl: 'partials/login.html',

  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',

  })
  .when('/topic/:id', {
    templateUrl: 'partials/topic.html',

  })
  .when('/profile/:id', {
    templateUrl: 'partials/userProfile.html',

  })
  .otherwise('/main')
})
