app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', '$routeParams', function($scope, userFactory, $location, $cookies, $routeParams){
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
      $location.url('/home')
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
