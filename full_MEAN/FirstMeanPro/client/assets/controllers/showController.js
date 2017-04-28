app.controller('showController', ['$scope', 'showFactory', 'updateFactory', '$routeParams', '$location', function($scope, showFactory, updateFactory, $rParams, $location) {
// $scope.friends = {};
  console.log("RPARAM is", $rParams)
  updateFactory.getOne($rParams, function(data){
  $scope.friends = data.data.result
  console.log("frrrrrrrrr $$å", $scope.friends.result)
})
}]);
