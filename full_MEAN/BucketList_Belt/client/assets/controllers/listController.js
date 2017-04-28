app.controller('listController', ['$scope', 'listFactory', '$location', '$cookies', '$rootScope', '$routeParams', '$route', function($scope, listFactory, $location, $cookies, $rootScope, $routeParams, $route){
$scope.list ={
  _listCreator : $scope.theUserId
};
$scope.aUsersList = {}
$scope.showUsersList = function(){
  listFactory.showUsersList($routeParams, function(returnedData){
    console.log(returnedData);
    $scope.aUsersList = returnedData
    if($scope.aUsersList._id === $cookies.get('logged_id')){
    $scope.edit()
  }
  })
}
$scope.thisUser = []
$scope.show = function(){
  listFactory.show($scope.theUserId, function(returnedData){

    $scope.thisUser = returnedData
      console.log($scope.thisUser);
      // $scope.checked()
    $scope.index()
  })
}
$scope.show()
$scope.edit = function(idx){
  if($routeParams.id === $cookies.get('logged_id')){
    console.log("You can edit this");
    console.log($scope.aUsersList.lists[idx]);
    $scope.val = $scope.aUsersList.lists[idx].done;
    // if($scope.aUsersList.lists[idx].done == true){
    //   $scope.aUsersList.lists[idx].done  = true
    //   $scope.val = true
    // }
    //  else if($scope.aUsersList.lists[idx].done == false){
    //   $scope.aUsersList.lists[idx].done  = false
    //   $scope.val = false
    // }
    $scope.itemToChange = {
      _id: $scope.aUsersList.lists[idx],
      val: $scope.val
    }
    listFactory.changeBool($scope.itemToChange, function(returnedData){
      console.log(returnedData.data);
      $scope.show()
    })
  } else{
    $scope.aUsersList.lists[idx].done = !$scope.aUsersList.lists[idx].done
    // $scope.showUsersList()
    alert("Sorry! You are not allowed to edit this function")
  }

}
$scope.showUsersList()
$scope.checked= function(idx){
  //  console.log($event);
  // $scope.val = $scope.thisUser.lists[idx].done;
  // console.log($scope.thisUser.lists[idx].done);
  // if($scope.thisUser.lists[idx].done == true){
  //   $scope.thisUser.lists[idx].done  = true
  //   $scope.val = true
  // }
  //  else if($scope.thisUser.lists[idx].done == false){
  //   $scope.thisUser.lists[idx].done  = false
  //   $scope.val = false
  // }
  $scope.itemToChange = {
    _id: $scope.thisUser.lists[idx],
    val: $scope.thisUser.lists[idx].done
  }
  console.log($scope.itemToChange._id);
  console.log($scope.itemToChange.val);
  listFactory.changeBool($scope.itemToChange, function(returnedData){
    console.log(returnedData.data);
    $scope.show()
  })
  console.log($scope.val);
}

console.log('vvvvvv',$scope.thisUser);
$scope.addList = function(){
    console.log($scope.list);
  if(!$scope.list.title || !$scope.list.description){
    alert("Cannot create list. Please obey validations inorder to add to your bucket list!")
  }else{

  listFactory.addList($scope.list, function(returnedData){
    console.log(returnedData.data);
    $scope.show()
  })
}
}
}])
