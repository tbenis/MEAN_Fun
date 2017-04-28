app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, userFactory, $location, $cookies, $rootScope, $routeParams){
  $scope.user = {}
  $scope.users;
  $scope.userInfo;
  // $scope.forProfile ={}

  $scope.index = function(){
    userFactory.index(function(data){
      $scope.users= data;
    //   for(var i= 0; i < $scope.users.length; i++){
    //     console.log($scope.users[i]._id);
    //     if($scope.users[i]._id === $routeParams.id){
    //       console.log($scope.users[i])
    //       if($scope.users[i].comments.length >2 ){
    //
    //       }
    //       if($scope.users[i].comments.length >2 ){}
    //       if($scope.users[i].comments.length >2 ){}
    //       $scope.forProfile.Topics =0
    //       $scope.forProfile.Posts =0
    //       $scope.forProfile.Comment =0
    //   }
    //   else(console.log('still searching'))
    // }
      })
    }

  $scope.index()

  $rootScope.loggedIn = $cookies.get('currUser')
  console.log($rootScope.loggedIn);

  $scope.login = function(){
    userFactory.login($scope.user, function(data){

      $cookies.put('logged_name', data.name)
      $cookies.put('logged_id', data._id)
      console.log('curr user', $cookies.get('logged_name'));
        $scope.user = data
      $location.url('/dashboard')
    })
  }

  $scope.theUser = $cookies.get('logged_name')
  console.log($scope.user);
  $scope.theUserId = $cookies.get('logged_id')
  console.log($scope.theUserId);

  $scope.forProfile = function(){
    console.log('%%%%%',$routeParams);
    userFactory.forProfile($routeParams, function(returnedData){
      console.log(returnedData);
      $scope.userInfo = returnedData
    })
  }
  $scope.forProfile()
console.log('%%%%%',$routeParams);
  $scope.logout = function(){
    $cookies.remove('logged_id')
    $cookies.remove('logged_name')
    $location.url('/main')
  }

// $scope.state = function(){
//   if($location.url()  == '/main'){
//     console.log('logged out');
//     $cookies.remove('logged_id')
//     $cookies.remove('logged_name')
//   }else{
//     console.log('logged in as ', $cookies.get('logged_name'));
//   }
// }
// $scope.state()
}])
