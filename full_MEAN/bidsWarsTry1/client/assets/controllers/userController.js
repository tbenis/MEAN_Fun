app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', '$routeParams', '$route', function($scope, userFactory, $location, $cookies, $routeParams, $route){
  $scope.user = {}
  $scope.users;
  $scope.userInfo;

  $scope.index = function(){
    // console.log(userFactory)
    userFactory.index(function(data){
      $scope.users= data;
      // console.log($scope.users);
    })
  }
  //
  $scope.index()

  $scope.login = function(){
    userFactory.login($scope.user, function(data){

      $cookies.put('logged_name', data.name)
      $cookies.put('logged_id', data._id)
      // console.log('curr user', $cookies.get('logged_name'));
        $scope.user = data
      $location.url('/bids')
      setTimeout(function() {$route.reload()}, 300)
    })
  }
    $scope.theUserName = $cookies.get('logged_name')
    $scope.theUserId = $cookies.get('logged_id')

  $scope.logout = function(){
    $cookies.remove('logged_id')
    $cookies.remove('logged_name')
    $location.url('/')

  }

}])
