app.factory('showFactory', ['$http', function($http) {
  var factory = {};
  factory.friends = [];

  factory.index = function(callback){
    $http.get("/friends").then(function(returnedData){
      console.log("returnedData from showfact", returnedData.data.result)
      factory.friends = returnedData.data.result
      console.log("******", factory.friends)
      callback(returnedData.data.result)
    })
}
    

  return factory;
}]);
