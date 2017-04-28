app.factory('userFactory', ['$http', function($http){
 var factory = {}

 factory.index = function(callback){
   $http.get('/user').then(function(data){
      var thedata = data.data.result
     callback(thedata)
   })
 }
 factory.forProfile = function(id, callback){
   console.log(id.id);
   $http.get('/user/'+ id.id).then(function(result){
     var user = result.data
     callback(user);
   })
 }
 factory.login = function(user, callback){
   $http.post('/user', user).then(function(result){
    console.log(result.data);
    var user = result.data
    callback(user)
   })
 }

 return factory
}])
