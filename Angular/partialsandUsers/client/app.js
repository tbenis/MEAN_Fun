//  inject the ngRoute dependency in the module.
var app = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/customizeUsers.html',
    })
    $routeProvider.when('/partial2', {
        templateUrl: 'partials/userList.html'
    })
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);
app.factory('userFactory', ['$http', function($http) {
    var factory = {};
    var users = [];

    factory.index = function(callback) {
        callback(users);
    }
    factory.create = function(user) {

            users.push(user);

    }
    factory.delete = function(id) {
        users.splice(id, 1);
    }
    factory.getUsers = function() {
        return users;
    }
    return factory;
}]);
//  build the controllers
app.controller('userController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
        $scope.users = [];
        userFactory.index(function(data) {
            $scope.users = data
        });
        $scope.create = function() {
            userFactory.create($scope.user);
            $scope.user = {};
            $location.url('/partial2')
        }

        $scope.delete = function(id) {
            userFactory.delete(id)
        }

    }])
app.controller('listController', ['$scope', 'userFactory', function($scope, userFactory) {
        $scope.users = [];
        userFactory.index(function(data) {
            $scope.users = data;
        });

    }])
