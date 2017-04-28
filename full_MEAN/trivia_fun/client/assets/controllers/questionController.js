app.controller('questionController', ['$scope', 'questionFactory', '$location', '$cookies', '$routeParams', '$route', function($scope, questionFactory, $location, $cookies, $routeParams, $route){
$scope.question = {
  _user : $cookies.get('logged_id')
}
$scope.answer ={}
$scope.results = []

$scope.questions = []
$scope.questionsAnswer = []


$scope.index = function(){
  questionFactory.index(function(returnedData){
    $scope.count = 0
    for(var i =0; i< 3; i++){
     var idx =  Math.floor((Math.random() * returnedData.length) + 0)
     var idx2 =  Math.floor((Math.random() * 3) + 0)
     $scope.rand1 = Math.floor((Math.random() * 3) + 0)
    //  var rand2 = Math.floor((Math.random() * 3) + 0)
    //  var rand3 = Math.floor((Math.random() * 3) + 0)
     $scope.questions.push(returnedData[idx])
     $scope.questionsAnswer.push([returnedData[idx].cAnswer, returnedData[idx].fAnswerOne, returnedData[idx].fAnswerTwo])
    //
     $scope.count += 1
     console.log($scope.questionsAnswer);
    //  $scope.questions = []
    //  console.log($scope.questionsAnswer);
    if($scope.count == 0){
      $scope.ans1 = returnedData[idx].cAnswer
      $scope.ans2 = returnedData[idx].fAnswerOne
      $scope.ans3 = returnedData[idx].fAnswerTwo
    }


    console.log($scope.count);
   }
  })
}
$scope.aIndex = function(){
  questionFactory.aIndex(function(returnedData){
    console.log(returnedData);
    $scope.results = returnedData
  })
}

$scope.index()
$scope.aIndex()
$scope.newQuestion = function(){
  questionFactory.newQuestion($scope.question, function(returnedData){
    // console.log(returnedData);
    $location.url('/home')
  })
}
$scope.answerQuestion = function(){
  console.log($scope.answer);
  console.log($scope.questions);
  console.log($scope.answer.answer);
  $scope.answerStored = {
    _uTest : $cookies.get('logged_id')
  }
  $scope.counter = 0;
  // for(var j = 0; j< 3; j++){
    // console.log($scope.answer  , $scope.questions[j].cAnswer);
    if($location.path() == '/lets_play'){
    if(!$scope.answer.answer[0]){
        alert('Please Answer question 1!')
    }else if(!$scope.answer.answer[1]){
        alert('Please Answer question 2!')
    }else if(!$scope.answer.answer[2]){
      alert('Please Answer question 3!')
    }else{
      for(var c = 0; c < 3; c++){
    if($scope.answer.answer[c]=== $scope.questions[c].cAnswer){
        $scope.counter += 1
    }

    }
    if($scope.counter == 1){
      $scope.answerStored.score = 1
      $scope.answerStored.percentage = 33.3
    }
    if($scope.counter == 2){
      $scope.answerStored.score = 2
      $scope.answerStored.percentage = 66.7
    }
    if($scope.counter == 3){
      $scope.answerStored.score = 3
      $scope.answerStored.percentage = 100
    }
    if($scope.counter == 0){
      $scope.answerStored.score = 0
      $scope.answerStored.percentage = 0
    }
    questionFactory.answerQuestion($scope.answerStored, function(returnedData){
      console.log(returnedData);
      $location.url('/home')
      setTimeout(function(){ alert('That was Great! '+$cookies.get('logged_name')+ "! Your Score is " + returnedData.score +"/3 "+ "("+ returnedData.percentage +"%)") }, 300)
      // .then(function(){
      // if($location.path() == '/home'){

    // }

    })
    console.log($scope.answerStored);
    }
    console.log($scope.counter);
  }

}
}])
