/*
    This is the monolithic JavaScript that you should be modularizing.
    The whole project has 5 problems in it, that when rectified will allow the project to run.
    Feel free to improve upon code quality, readability, and comments.
  */
/* our angular app modularize, with config */
var app = angular.module('app', ['ngRoute']);
/* configuration for angular route */
app.config(function($routeProvider) {

    $routeProvider.when('/index', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    }),
    $routeProvider.when('/:_id',{
  templateUrl: 'partials/info.html'
}),
    $routeProvider.when('/edit/:id', {
      templateUrl: '/partials/edit.html',
      controller: 'editController',
      controllerAs: 'eC'
    })
    $routeProvider.when('/new', {
      templateUrl: '/partials/new.html',
      controller: 'newController',
    })
    $routeProvider.otherwise({
      redirectTo: '/index'
    });
});
/*
  Our factory: This is going to control all of our data.
  Modularize into a folder called: 'factories' within 'client'
*/
app.factory('userFactory', ['$http', function($http) {
var factory = {};
var users =[]
factory.index = function(callback){
  if(users.length < 10){
    $http.get('http://54.209.117.252/users').then(function(data){
    users = data.data;
  callback(users);
  })
return;
}else{callback(users)}
}
factory.create = function(user){
  users.push(user)
}
factory.update = function(updateUser, idx, callback){
  if (users[idx]) {
        for (var key in updateUser) {
          users[idx][key] = updateUser[key];
        }
      }
    }
factory.show= function(idx, callback){
if(typeof(callback)==="function"){
  callback(users[idx])
}
}
factory.delete= function(idx){
  if (users[idx]) {
      users.splice(idx, 1);
    }
  }
return factory

}])
/*
  Our controllers: Modularize these into a folder called:
  'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
*/
app.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
  /* Private Methods */
  var usersIndex = function() {
      userFactory.index(function beingPassedToTheFactoryIndexByThisController(usersFromTheFactory) {
        $scope.users = usersFromTheFactory;
      } /* end args passed to userFactor index */ ); //end userFactory method invokation
    } //end usersIndex

  /* Scope Methods */
  $scope.show = function(user_id) {
      $location.url('/edit/' + user_id);
    }
    /* on load time */
  console.log("loading the controller");
  console.log(userFactory);
  console.log(this);
  usersIndex();
}]);
/* EDIT CONTROLLER: this controller uses 'this', and the controlValue seems to not update (a bug for you to fix! possibly one new line of code ~ 14 characters, and one modification of something that already exists)*/
app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
  /* Public Properties */
  this.controlValue = "Current Name:";
  /* Public Methods */
  this.getUser = function() {
    userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
      $scope.user = user;
    })
  }

  this.updateUser = function(){
    userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
      $scope.user = userFromFactory;
      // what is this?
      this.controlValue = "Updated Name: "
    });
  }
  /* on load time */
  this.getUser();
  console.log(this);
}]);
app.controller('newController', ['$scope','userFactory','$location', function($scope, userFactory, $location) {
  $scope.users =[]

  userFactory.index(function(data){
        $scope.users = data
    });

  $scope.create = function(){
    userFactory.create($scope.user);
      $scope.user = {}
    console.log($scope.user);
    $location.url('/index')
   }
  // $scope.update= function(){}
  //   $scope.show= function(){}
  //     $scope.delete=function(){}
}]);
