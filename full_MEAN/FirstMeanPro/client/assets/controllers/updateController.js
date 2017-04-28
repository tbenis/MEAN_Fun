app.controller('updateController', ['$scope', 'updateFactory',  '$routeParams', '$location', function($scope, updateFactory, $rParams, $location) {
$scope.friends = [];
$scope.friend = {};
$scope.friend.bday;

updateFactory.getOne($rParams, function(data){
$scope.friends = data.data.result;
})

$scope.update = function(){
  updateFactory.update($rParams, $scope.friend, function(data){})
}
}]);
