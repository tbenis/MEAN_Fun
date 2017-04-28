app.factory('answerFactory', ['$http', function($http){
 var factory = {}

 factory.showQuest = function(id, callback){
   console.log(id);
   $http.get('/question/'+ id).then(function(result){
     console.log(result);
     var data = result.data
     callback(data)
   })
 }
 factory.like = function(id, callback){
   console.log(id);
   $http.post('/like/'+ id).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 factory.newAnswer = function(data, callback){
   $http.post('/answer', data).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 return factory
}])
