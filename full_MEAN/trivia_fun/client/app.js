app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',

  })
  .when('/lets_play', {
    templateUrl: 'partials/lets_play.html',

  })
  .when('/new_question', {
    templateUrl: 'partials/new_question.html',

  })
  .when('/home', {
    templateUrl: 'partials/home.html',

  })
  .otherwise('/')
})
