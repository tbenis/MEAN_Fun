app.controller('productController', ['$scope', 'productFactory', '$location', '$cookies', '$routeParams', function($scope, productFactory, $location, $cookies, $routeParams){
$scope.products = []
$scope.bid = {
  _bidder : $cookies.get('logged_id'),
}
$scope.bid1={};

$scope.product1Bids =[];
$scope.product2Bids=[];
$scope.product3Bids=[];

$scope.product1Bidders =[];
$scope.product2Bidders=[];
$scope.product3Bidders=[];

$scope.product1Winner;
$scope.product2Winner;
$scope.product3Winner;

$scope.productMax= [0,0,0];

$scope.index = function(){
    productFactory.index(function(returnedData){
  console.log(returnedData);
  $scope.products = returnedData;
  for(var los = 0; los < returnedData[0].bids.length; los++){
    $scope.product2Bidders.push(returnedData[0].bids[los]._bidder.name)
      $scope.product1Bids.push(returnedData[0].bids[los].bid)
      $scope.product1Winner = returnedData[0].bids[los]._bidder.name
      if($scope.productMax[0] < returnedData[0].bids[los].bid){
        $scope.productMax[0]= returnedData[0].bids[los].bid
      }
  }
  for(var los1 = 0; los1 < returnedData[1].bids.length; los1++){
    console.log(returnedData[1].bids[los1].bid);
    $scope.product1Bidders.push(returnedData[1].bids[los1]._bidder.name)
      $scope.product2Bids.push(returnedData[1].bids[los1].bid)
      $scope.product2Winner = returnedData[1].bids[los1]._bidder.name
      if($scope.productMax[1] < returnedData[1].bids[los1].bid){
        $scope.productMax[1]= returnedData[1].bids[los1].bid

}
  }
  for(var los2 = 0; los2 < returnedData[2].bids.length; los2++){
    $scope.product3Bidders.push(returnedData[2].bids[los2]._bidder.name)
      $scope.product3Bids.push(returnedData[2].bids[los2].bid)
      $scope.product3Winner = returnedData[2].bids[los2]._bidder.name
      if($scope.productMax[2] < returnedData[2].bids[los2].bid){
        $scope.productMax[2]= returnedData[2].bids[los2].bid
      }
  }
    console.log('$scope.productMax', $scope.productMax);
    console.log($scope.product1Winner, $scope.product2Winner, $scope.product3Winner);

})
}
$scope.index()
$scope.placeBid = function(id, idx){
  $scope.index()
  console.log(idx);

  if( $scope.bid1.bid[idx] <= 0){
      alert('Cant bid 0 or less!');
  } else if ($scope.bid1.bid[idx] <= $scope.productMax[idx]){
      alert('Your Bid cannot be less than or equal previous bid');
  }else{
  $scope.bid._product = id
  $scope.bid.bid = $scope.bid1.bid[idx]
  console.log($scope.bid);
  console.log($scope.product1Bidders);
  productFactory.placeBid($scope.bid, function(returnedData){
    $scope.product1Max = $scope.bid1.bid
    console.log('bid Two', returnedData);
    $scope.index()
    })
}
}
$scope.endBid = function(){
  if($location.path()=== "/bids"){
    $scope.index()
    console.log('$scope.productMax', $scope.productMax);
    console.log("pRODUCT 1 BIDDERS", $scope.product1Bidders)
    console.log("pRODUCT 2 BIDDERS", $scope.product2Bidders)
    console.log("pRODUCT 3 BIDDERS", $scope.product3Bidders)
    $scope.flag1 = false
    $scope.flag2 = false
    $scope.flag3 = false
  for(var i = 0; i < $scope.product2Bidders.length; i++){
    console.log($scope.product2Bidders[i], $cookies.get('logged_name'));
    if($scope.product2Bidders[i] === $cookies.get('logged_name')){
      console.log('true1');
        $scope.flag1 = true
    }
  }
  for(var j = 0; j < $scope.product1Bidders.length; j++){
    console.log($scope.product1Bidders[j], $cookies.get('logged_name'));
    if($scope.product1Bidders[j] === $cookies.get('logged_name')){
      console.log('true2');
        $scope.flag2 = true
    }
  }
  for(var k = 0; k < $scope.product3Bidders.length; k++){
    console.log($scope.product3Bidders[k], $cookies.get('logged_name'));
    if($scope.product3Bidders[k] === $cookies.get('logged_name')){
      console.log('true3');
        $scope.flag3 = true
    }
  }
  if($scope.flag1 === false || $scope.flag2 === false || $scope.flag3 === false) {
    alert('Cannot end bid without bidding on all products')
  }else{
  $location.url("/result")
}
}
}
$scope.delete = function(){
  productFactory.delete(function(returnedData){
    $location.url('/bids')
  })
}

}])
