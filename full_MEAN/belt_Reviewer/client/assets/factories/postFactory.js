app.factory('postFactory', ['$http', function($http){
 var factory = {}
 factory.index = function(callback){
   $http.get('/posts').then(function(result){
     console.log(result);
     var data = result.data.result
     callback(data)
   })
 }
 factory.show = function(id, callback){
   $http.get('/topic/'+ id).then(function(returnedData){
     console.log(returnedData.data);
     var data = returnedData.data
     callback(data)
   })
 }
 factory.newPost = function(data, callback){
   $http.post('/posts/', data).then(function(returnedData){
     var data = returnedData.data
     callback(returnedData)
   })
 }
 factory.up_vote = function(data, callback){
   id = data
   $http.post('/upvote/'+id).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 factory.down_vote = function(data, callback){
   console.log(data);
  id = data
   $http.post('/downvote/'+id).then(function(result){
     console.log(result);
     callback(result)
   })
 }
factory.newComment = function(data, id, callback){
  $http.post('/comments/'+ id, data).then(function(result){
    console.log(result);
    callback(result);
  })
}
 return factory
}])
