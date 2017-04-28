app.factory('questionFactory', ['$http', function($http){
 var factory = {};
 factory.index = function(callback){
   $http.get('/question').then(function(result){
    //  console.log(result.data);
     var data = result.data
     callback(data)
   })
 }
 factory.newQuestion = function(data, callback){
  //  console.log(data);
   $http.post('/question', data).then(function(result){
    //  console.log(result);
     callback(result)
   })
 }
 factory.aIndex = function(callback){
   $http.get('/answer').then(function(result){
     console.log(result.data);
     var data = result.data
     callback(data)
   })
 }
 factory.answerQuestion = function(data, callback){
   $http.post('/answer', data).then(function(result){
     console.log(result.data);
     var data = result.data
     callback(data)
   })
 }
 return factory;
}])
