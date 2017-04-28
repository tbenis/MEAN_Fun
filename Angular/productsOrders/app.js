var app = angular.module('app', []);
app.factory('productFactory', ['$http', function($http) {
  var factory = {};
  var products = [];

  factory.index = function(callback){
    callback(products);
  }
  factory.create = function(product){
    if(product.price){
    // product.index = indexOf(product);
    product.quantity = 50;
    products.push(product);
}
}
  factory.delete = function(id){
    products.splice(id, 1);
  }
  factory.getProducts= function(){
    return products;
  }
  factory.buyProduct = function(id) {
      if (products[id].quantity >= 0) {

          products[id].quantity--;
      }else {
          alert('There are no more ' + product.name + ' products available.');
      }
  };

  return factory;
}]);
app.controller('orderController', ['$scope', 'productFactory', function($scope, productFactory){
            $scope.products = [];
            productFactory.index(function(data) {$scope.products = data;});

                  $scope.buyProduct = function(id){

                    productFactory.buyProduct(id);

                  }
          }])

    app.controller('productController', ['$scope', 'productFactory', function($scope, productFactory){

      $scope.products = [];
        productFactory.index(function(data){ $scope.products=data});

      $scope.create = function(){

        productFactory.create($scope.product);
            $scope.product = {};
      }

      $scope.delete = function(id){
        productFactory.delete(id)
      }

    }])
    // Note the use of Underscore. Also note the use of _.extend() rather than
    // "product = data". This is to prevent breaking variable references
