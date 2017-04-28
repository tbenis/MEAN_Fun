app.factory('newFactory', ['$http', function($http) {
  var factory = {};

  factory.newFriend = function(data, callback){
    console.log(data);
    $http.post("/friends/new", data).then(function(returnedData){
        console.log(returnedData)
      callback(returnedData)
    })
  }
  return factory;
}]);
