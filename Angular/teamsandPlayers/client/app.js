//  inject the ngRoute dependency in the module.
var app = angular.module('myApp', ['ngRoute']);
//  use the config method to set up routing:
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/players.html',
    })
    $routeProvider.when('/partial1', {
        templateUrl: 'partials/teams.html'
    })
    $routeProvider.when('/partial2', {
        templateUrl: 'partials/associations.html'
    })
    $routeProvider.otherwise({
        redirectTo: '/'
    });
}]);
app.factory('playerFactory', ['$http', function($http) {
    var factory = {};
    var players = [];

    factory.index = function(callback) {
        callback(players);
    }
    factory.create = function(player) {

      players.push(player);
    }
    factory.delete = function(id) {
        players.splice(id, 1);
    }
    factory.getPlayers = function() {
        return players;
    }
    return factory;
}]);
app.factory('teamFactory', ['$http', function($http) {
    var factory = {};
    var teams = [];

    factory.index = function(callback) {
        callback(teams);
    }
    factory.create = function(team) {
      teams.push(team);
    }
    factory.delete = function(id) {
        teams.splice(id, 1);
    }
    factory.getTeams = function() {
        return teams;
    }
    return factory;
}]);
// app.factory('associationFactory', ['$http', function($http) {
//     var factory = {};
//     var teams = [];
//
//     factory.index = function(callback) {
//         callback(teams);
//     }
//     factory.create = function(team) {
//       teams.push(team);
//     }
//     factory.delete = function(id) {
//         teams.splice(id, 1);
//     }
//     factory.getTeams = function() {
//         return teams;
    // }
//     return factory;
// }]);
//  build the controllers
app.controller('playerController', ['$scope', 'playerFactory',  function($scope, playerFactory) {
        $scope.players = [];
        playerFactory.index(function(data) {
            $scope.players = data
        });
        $scope.create = function() {
            playerFactory.create($scope.player);
            $scope.player = {};
        }

        $scope.delete = function(id) {
            playerFactory.delete(id)
        }

    }])
app.controller('teamController', ['$scope', 'teamFactory', function($scope, teamFactory) {
  $scope.teams = [];
  teamFactory.index(function(data) {
      $scope.teams = data
  });
  $scope.create = function() {
      teamFactory.create($scope.team);
      $scope.team = {};
  }

  $scope.delete = function(id) {
      teamFactory.delete(id)
  }

}])
app.controller('associationController', ['$scope', 'teamFactory', 'playerFactory', function($scope, playerFactory, teamFactory) {
         $scope.players = [];
         $scope.teams = [];
         $scope.associations = [];
         $scope.newAssociation = {};

        playerFactory.index(function(data) {$scope.players = data;})
        teamFactory.index(function(data) {$scope.teams = data;})

         $scope.add = function() {
           console.log($scope.newAssociation);
           if($scope.newAssociation)
             $scope.associations.push($scope.newAssociation);
             $scope.newAssociation = {};
         }

          $scope.remove =function(id) {
             $scope.associations.splice(id, 1);
         }
     }])
