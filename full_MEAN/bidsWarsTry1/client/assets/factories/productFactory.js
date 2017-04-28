app.factory('productFactory', ['$http', function($http){
 var factory = {};
// console.log('in user fact');
 factory.index = function(callback){
   $http.get('/product').then(function(data){
      var thedata = data.data.results;
     callback(thedata);
   });
 }

 factory.placeBid = function(data, callback){
   console.log(data);
   $http.post('/bid', data).then(function(result){
     var data = result.data
     console.log(data);
     callback(data)
   })
 }
 factory.bIndex = function(id, callback){
   $http.get('/bids/'+ id).then(function(result){
     var data = result.data
     console.log(data);
     callback(data)
   })
 }
 factory.delete = function(callback){
   $http.delete('/bids').then(function(result){
     callback(result)
   })
 }
 return factory;
}])
