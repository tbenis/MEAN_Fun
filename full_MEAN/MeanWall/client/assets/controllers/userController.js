app.controller('userController', ['$scope', 'userFactory',  '$routeParams', '$location', '$cookies', '$rootScope', function($scope, userFactory, $rParams, $location, $cookies, $rootScope) {
$scope.user = {}
$scope.users = []
$rootScope.thisUser = []
// $scope.cookieJar = $cookies.put('currUser')


// userFactory.index(function(data){
//   $scope.users = data;
// })


$scope.create = function(){
  if(!$scope.user.name){
    return alert("Please enter Name")
  }
  userFactory.create($scope.use, function(returnedData){
    console.log(returnedData)
    $scope.currUser($scope.user)
  })

  $scope.currUser = function(user){
    console.log('uuus', user.name)
  $rootScope.thisUser = user.name
  }
  $location.url('/user/:id')
}

}]);
