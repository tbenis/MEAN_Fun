var app = angular.module('myApp',[])
app.controller('UsersController', function($scope){
  $scope.users=[]
  $scope.user= {}
  $scope.addUser = function(){
    $scope.users.push($scope.user)

    $scope.user= {}
  }
  $scope.delete = function(x){
    console.log(x);
  for(var i =0; i < $scope.users.length; i++){
    if($scope.users[i] == x){
      $scope.users.splice(i, 1)
    }
  }
  }
})
