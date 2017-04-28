app.controller('answerController', ['$scope', 'answerFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, answerFactory, $location, $cookies, $rootScope, $routeParams){
$scope.answer = {
    _user : $cookies.get('logged_id'),
    _question : $routeParams.id
}
$scope.thisQuest;
$scope.showQuest = function(){
  answerFactory.showQuest($routeParams.id, function(returnedData){
    console.log(returnedData);
    $scope.thisQuest = returnedData
  })
}
$scope.like = function(id){
  answerFactory.like(id, function(returnedData){
    console.log(returnedData);
    $scope.showQuest()
  })
}
$scope.showQuest()
$scope.newAnswer = function(){
  if($scope.answer.answer.length < 5){
    alert('answer must be more than five characters long')
  }else{
  console.log($scope.answer);
  answerFactory.newAnswer($scope.answer, function(returnedData){
    console.log(returnedData);

  })
}
}
}])
