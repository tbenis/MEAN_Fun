app.factory('indexFactory', ['$http', function($http) {
  var factory = {};
  factory.friends = [];

  factory.index = function(callback){
    $http.get("/friends").then(function(returnedData){
      console.log("returnedData from indexfact", returnedData.data.result)
      factory.friends = returnedData.data.result
      console.log("******", factory.friends)
      callback(returnedData.data.result)
    })
  }
  factory.delete = function(id, callback){
    $http.delete("/friends/" +id, id).then(function(result){
    console.log("rESSS", result);
      callback(result)
    })
  }
  return factory;
}]);
