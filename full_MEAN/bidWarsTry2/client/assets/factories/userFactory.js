app.factory('userFactory', ['$http', function($http){
 var factory = {};
 factory.index = function(callback){
   $http.get('/user').then(function(data){
      var thedata = data.data.result;
     callback(thedata);
   });
 }
 factory.login = function(user, callback){
   $http.post('/user', user).then(function(result){
    var user = result.data
    callback(user)
   })
 }

 return factory;
}])
