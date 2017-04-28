app.factory('questionFactory', ['$http', function($http){
 var factory = {}

factory.index = function(callback){
  $http.get('/question').then(function(result){
    data = result.data
    console.log(data);
    callback(data)
  })
}
 factory.newQuestion = function(data, callback){
   console.log(data);
   
   $http.post('/question', data).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 return factory
}])
