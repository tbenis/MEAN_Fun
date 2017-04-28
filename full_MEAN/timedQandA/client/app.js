app.config(function($routeProvider){
  $routeProvider
  .when('/main', {
    templateUrl: 'partials/login.html',

  })
  .when('/dashboard', {
    templateUrl: 'partials/dashboard.html',

  })
  .when('/addQuestion', {
    templateUrl: 'partials/addQuestion.html',

  })
  .when('/questionInfo/:id', {
    templateUrl: 'partials/questionDash.html',

  })
  .when('/questionInfo/:id/newAnswer', {
    templateUrl: 'partials/answerQuestion.html',

  })
  .otherwise('/dashboard')
})
