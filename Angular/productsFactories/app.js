var app = angular.module('myApp', [])
app.factory('productFactory', [function(){

  var factory = {
    products: []
  };

  return factory;
}])

app.controller('productsController', ['$scope', 'productFactory', function($scope, productFactory){
  $scope.products = {name: $scope.name, price: $scope.price};

}])
