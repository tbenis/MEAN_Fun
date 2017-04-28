app.controller('recipeController', ['$scope', 'recipeFactory', '$location', '$cookies', '$routeParams', '$route', function($scope, recipeFactory, $location, $cookies, $routeParams, $route) {
$scope.ingredient = {}
$scope.ingredients = []
$scope.recipe = {}
$scope.recipes = []
$scope.aRecipe;
$scope.index = function(){
  recipeFactory.index(function(data){
    $scope.recipes = data
  })
}
$scope.index()
$scope.collectIngredients = function(){
  $scope.ingredients.push($scope.ingredient)
  // console.log($scope.ingredients );
  // console.log($scope.ingredient);
  $scope.ingredient = {}
  // $scope.ingredients = []
}
$scope.findRecipeInfo = function(){
  // console.log($routeParams);
  recipeFactory.findRecipeInfo($routeParams, function(returnedData){
    $scope.aRecipe = returnedData
    console.log($scope.aRecipe);
  })
}
$scope.findRecipeInfo()
$scope.newRecipe= function(){
  $scope.recipe._user = $scope.theUserId
  $scope.recipe.ingredients = $scope.ingredients
  // console.log($scope.recipe);
  $scope.collectIngredients()
  recipeFactory.newRecipe($scope.recipe, function(returnedData){
    // console.log(returnedData);
    $location.url('/dashboard')
  })
}
$scope.cookedTimes = function(id){
  recipeFactory.cookedTimes(id, function(returnedData){
    console.log(returnedData);
    $location.url('/dashboard')
  })
}
$scope.delete = function(id){
  recipeFactory.delete(id, function(returnedData){
    // console.log(returnedData);
    $scope.index()
  })
}
}])
