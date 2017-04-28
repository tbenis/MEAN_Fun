app.factory('recipeFactory', ['$http', function($http){
 var factory = {};
 factory.index = function(callback){
   $http.get('/recipes').then(function(result){
     var data = result.data
     callback(data)
   })
 }

 factory.newRecipe = function(data, callback){
   $http.post('/new_recipe', data).then(function(result){
     var data1 = result.data
     callback(data1)
   })
 }
factory.cookedTimes = function(id, callback){
  $http.post('/cookedTimes/'+ id).then(function(result){
    var data = result.data
    callback(data)
  })
}
 factory.findRecipeInfo = function(id, callback){
   $http.get('/aRecipe/'+ id.id).then(function(result){
     console.log(result);
     var data1 = result.data
     callback(data1)
   })
 }

 factory.delete = function(id, callback){
   $http.delete('/recipe/'+ id).then(function(result){
     var data1 = result.data
     callback(data1)
   })
 }
 return factory;
}])
