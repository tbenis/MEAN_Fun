app.controller('userController', ['$scope', 'userFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, userFactory, $location, $cookies, $rootScope, $routeParams){
  $scope.user = {}
  $scope.users;
  $scope.userInfo;
  // $scope.forProfile ={}

  $scope.index = function(){
    userFactory.index(function(data){
      $scope.users= data;
      console.log($scope.users);
    })
      }

  $scope.index()

  $scope.login = function(){
    userFactory.login($scope.user, function(data){

      $cookies.put('logged_name', data.name)
      $cookies.put('logged_id', data._id)
      console.log('curr user', $cookies.get('logged_name'));
        $scope.user = data
      $location.url('/dashboard')
    })
  }
    $scope.theUserName = $cookies.get('logged_name')
    $scope.theUserId = $cookies.get('logged_id')

    console.log($scope.theUserName);
//   $scope.theUser = $cookies.get('logged_name')
//   console.log($scope.user);
//   $scope.theUserId = $cookies.get('logged_id')
//   console.log($scope.theUserId);
//
//   $scope.fos = function(){
//     console.log('%%%%%',$routeParams);
//     userFactory.fos($routeParams, function(returnedData){
//       console.log(returnedData);
//       $scope.userInfo = returnedData
//     })
//   }
//   $scope.fos()
// console.log('%%%%%',$routeParams);
  $scope.logout = function(){
    console.log("loggind=g out");
    $cookies.remove('logged_id')
    $cookies.remove('logged_name')
    $location.url('/login')
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
