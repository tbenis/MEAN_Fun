app.factory('updateFactory', ['$http', function($http) {
  var factory = {};
  factory.friends = [];

  factory.update = function(data, body, callback){
    id = data._id
    console.log('dlfgiudsh', body);
     $http.put("/friends/"+ id, body).then(function(returnedData){
      callback(returnedData)
    })
}
    factory.getOne = function(friendid, callback){
      // console.log("coming from show fact",friendid)
      var id = friendid._id
      $http.get("/friends/" + id).then(function(data){
        // console.log('data from show fact',data)
        callback(data)
      })
    }

  return factory;
}]);
