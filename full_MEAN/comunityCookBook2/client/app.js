app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/login.html',

  })
  .when('/dashboard', {
    templateUrl: './partials/dashboard.html',
  })
  .when('/recipe/:id', {
    templateUrl: './partials/recipeInfo.html',
  })
  .when('/new_recipe', {
    templateUrl: './partials/new_recipe.html',
  })
  .otherwise('/')
})
