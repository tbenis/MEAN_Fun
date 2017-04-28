app.controller('questionController', ['$scope', 'questionFactory', '$location', '$cookies', '$rootScope', '$routeParams', function($scope, questionFactory, $location, $cookies, $rootScope, $routeParams){
$scope.question={
  _user : $cookies.get('logged_id')
}
$scope.questions = []
$scope.index = function(){
  questionFactory.index(function(data){
    console.log(data);
    $scope.questions = data
  })
}
$scope.index()

  $scope.newQuestion = function(){
    console.log($scope.question);
    if($scope.question.question.length < 10){
      alert('question must be atleast 10 characters long')
    }else{
    console.log($scope.question);
    questionFactory.newQuestion($scope.question, function(returnedData){console.log(returnedData);})
  }
}
}])
