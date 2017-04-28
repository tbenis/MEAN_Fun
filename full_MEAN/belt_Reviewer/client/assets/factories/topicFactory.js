app.factory('topicFactory', ['$http', function($http){
 var factory = {}

 factory.index = function(callback){
   $http.get('/topics').then(function(result){
     console.log(result.data);
     var allTopics = result.data.result
     callback(allTopics)
   })


 }
 factory.newTopic = function(data, callback){
   $http.post('/topics', data).then(function(result){
     console.log('result from topicFactory newTopic method', result);
     callback(result)
   })
 }

 return factory
}])
