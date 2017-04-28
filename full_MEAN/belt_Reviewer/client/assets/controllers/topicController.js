app.controller('topicController', ['$scope', 'topicFactory', '$location', '$rootScope', '$cookies', function($scope, topicFactory, $location, $rootScope, $cookies){
  $scope.topics =[]

  $scope.topic = {
    _id : $cookies.get('logged_id')
  }

  $scope.index= function(){
    topicFactory.index(function(data){
      $scope.topics = data
      console.log('all topics',  $scope.topics);
    })
  }
  $scope.index()

  // $rootScope.loggedIn = $cookies.get('currUser')
  $scope.logged_id = $cookies.get('logged_id')
  console.log($scope.logged_id);

  $scope.newTopic = function(){
    topicFactory.newTopic($scope.topic, function(returnedData){
      console.log('result from topicController newTopic method', returnedData);
      $scope.index()
    })
  }

}])
