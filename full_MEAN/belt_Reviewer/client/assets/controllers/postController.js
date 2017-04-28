app.controller('postController', ['$scope', 'postFactory', '$location', '$routeParams', '$cookies', function($scope, postFactory, $location, $routeParams, $cookies){
$scope.comment = {
  _user : $cookies.get('logged_id'),
}
 $scope.post = {
   _topic : $routeParams.id,
   _user : $cookies.get('logged_id')
 }
 $scope.posts = [];
 $scope.currTopic={};

 $scope.index = function(){
  postFactory.index(function(data){
    $scope.posts = data
    console.log($scope.posts);
  })
 }
 $scope.index()
 $scope.show = function(){
   postFactory.show($routeParams.id, function(data){
       $scope.currTopic = data
       console.log( $scope.currTopic);
   })
 }
 $scope.show()
 $scope.newPost = function(){
   console.log($scope.post);
   postFactory.newPost($scope.post, function(returnedData){
     console.log(returnedData);
     $scope.show()
   })
 }
 $scope.up_vote = function(id){
   postFactory.up_vote(id, function(returnedData){
     console.log(returnedData);
     $scope.show()
   })
   console.log('for upvote',id);
 }
 $scope.down_vote = function(id){
   console.log('for downvote',id);
   postFactory.down_vote(id, function(returnedData){
     console.log(returnedData);
     $scope.show()
   })
 }
 $scope.newComment = function(id){
   postFactory.newComment( $scope.comment, id, function(returnedData){
     console.log(returnedData);
     $scope.show()
   })
 }

}])
