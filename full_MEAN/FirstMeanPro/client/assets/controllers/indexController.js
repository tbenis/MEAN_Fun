app.controller('indexController', ['$scope', '$route', 'indexFactory', '$location', '$routeParams', function($scope, $route, indexFactory, $location, $rParams) {
$scope.friends = [];


$scope.newState= function(){
  indexFactory.index(function(returnedData){
    $scope.friends = returnedData
    console.log($scope.friends);
  })
}

$scope.newState()
$scope.delete = function(id){
  console.log(id)
  indexFactory.delete(id, function(returnedData){
    console.log( "rererere", returnedData)
$scope.newState()
  })
}
}]);
