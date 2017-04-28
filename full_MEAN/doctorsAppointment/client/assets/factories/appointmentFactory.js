app.factory('appointmentFactory', ['$http', function($http){
 var factory = {}
 factory.index = function(callback){
   $http.get('appointments').then(function(result){
     callback(result)
   })
 }
 factory.delete = function(id, callback){
   $http.delete('/appointment/'+ id).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 factory.newAppointment = function(data, callback){
   $http.post('/appointment', data).then(function(result){
     console.log(result);
     callback(result)
   })
 }
 return factory
}])
