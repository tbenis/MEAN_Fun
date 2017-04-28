app.factory('userFactory', ['$http', '$cookies', function($http, $cookies) {
  var factory = {};

  // factory.index = function(callback) {
  //   $http.get('/users').then(function(data){
  //     callback(data.data)
  //   })
  // }

  
  factory.create = function(data, callback){
      console.log('$scope.user', data);
    $http.post('/users', data).then(function(result){
      callback(result)

    })
  }

  return factory;
}]);
