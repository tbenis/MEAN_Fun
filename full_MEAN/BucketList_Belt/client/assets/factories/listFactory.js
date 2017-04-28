app.factory('listFactory', ['$http', function($http){
 var factory = {}

 factory.addList = function(data, callback){
   $http.post('/list', data).then(function(result){
     callback(result)
   })
 }
 factory.findUserId= function(name, callback){
   $http.get('/aUser/'+ name).then(function(result){
     var id = result.data
     callback(id)

   })
 }
 factory.changeBool = function(data, callback){
   $http.post('/boolChange', data).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 factory.show = function(id, callback){
   $http.get('/user/'+id).then(function(result){
     var data = result.data
     callback(data)
   })
 }
 factory.showUsersList = function(id, callback){
   _id = id.id
   $http.get('/user/info/'+ _id).then(function(result){
     var data = result.data
     callback(data)
   })
 }
 return factory
}])
