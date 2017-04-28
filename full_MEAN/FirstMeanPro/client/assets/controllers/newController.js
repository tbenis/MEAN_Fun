app.controller('newController', ['$scope', 'newFactory', '$location', function($scope, newFactory, $location) {
$scope.friends = [];
$scope.friend = {};

$scope.newFriend = function(){
  newFactory.newFriend($scope.friend, function(returndata){
    console.log('trynna return data');
    if(returndata.err){
    $scope.friends.push(err)
  } else {
    $location.url('/index')
  }
  })
}
}]);
