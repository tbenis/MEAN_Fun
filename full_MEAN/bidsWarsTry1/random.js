app.controller('productController', ['$scope', 'productFactory', '$location', '$cookies', '$routeParams', function($scope, productFactory, $location, $cookies, $routeParams){
$scope.products = []
$scope.bid = {
  _bidder : $cookies.get('logged_id'),
}
$scope.bid1={};

$scope.bidz = [];
$scope.bid1 = [];
$scope.product1Bids =[];
$scope.product2Bids=[];
$scope.product3Bids=[];
$scope.product1Max= 0;
$scope.product2Max=0;
$scope.product3Max=0;

$scope.index = function(){
    productFactory.index(function(returnedData){
  console.log(returnedData);
  $scope.products = returnedData;
  for(var los = 0; los < returnedData[0].bids.length; los++){
      $scope.product1Bids.push(returnedData[0].bids[los].bid)
      if($scope.product1Max < returnedData[0].bids[los].bid){
        $scope.product1Max= returnedData[0].bids[los].bid
      }
  }
    console.log('$scope.product1Max', $scope.product1Max);
  for(var los1 = 0; los1 < returnedData[1].bids.length; los1++){
    console.log(returnedData[1].bids[los1].bid);
      $scope.product2Bids.push(returnedData[1].bids[los1].bid)
      if($scope.product2Max < returnedData[1].bids[los1].bid){
        $scope.product2Max= returnedData[1].bids[los1].bid
      }
  }
  console.log('$scope.product2Max', $scope.product2Max);
  for(var los2 = 0; los2 < returnedData[2].bids.length; los2++){
      $scope.product3Bids.push(returnedData[2].bids[los2].bid)
      if($scope.product3Max < returnedData[2].bids[los2].bid){
        $scope.product3Max= returnedData[2].bids[los2].bid
      }
  }
    console.log('$scope.product3Max', $scope.product3Max);
  console.log($scope.product1Bids);
  console.log($scope.product2Bids);
  console.log($scope.product3Bids);
})
}
$scope.index()
$scope.bIndex = function(id){
  console.log(id);
  productFactory.bIndex(id, function(returnedDa){
    // console.log(returnedDa);
    $scope.bids = returnedDa

  })
}
$scope.placeBid = function(id){
  $scope.index()
  console.log($scope.bid);
  $scope.bid._product = id;
  console.log($scope.bid1.bid);
  console.log('$scope.product1Max', $scope.product1Max);
  console.log('$scope.product2Max', $scope.product2Max);
  console.log('$scope.product3Max', $scope.product3Max);

   if($scope.bid1.bid[0] <= 0){
      alert('Your Bid must be greater than 0')
    }
    else if($scope.bid1.bid[0]<= $scope.product1Max){
      alert('Your Bid must be higher than previous bid')
    } else {
      // $scope.product1Max = $scope.bid1.bid[0]
      console.log($scope.product1Max);
      console.log($scope.bid1.bid[0]);
      $scope.bid.bid = $scope.bid1.bid[0]
      console.log($scope.bid);
      productFactory.placeBid($scope.bid, function(returnedData){
        console.log('bid oNE', returnedData );
        $scope.bidz[0] = returnedData;
        $scope.index()
        console.log($scope.bid1.bid);
        console.log($scope.bidz);
      })
    }
    console.log($scope.bid1.bid);

  console.log($scope.bid1.bid[1]);
  if($scope.bid1.bid[1] <= 0){
    alert('Your Bid must be greater than 0')
  }else if($scope.bid1.bid<= $scope.product2Max){
      alert('Your Bid must be higher than previous bid')
  } else {
    // $scope.product2Max = $scope.bid1.bid
    console.log($scope.product2Max);
    console.log($scope.bid1.bid);
    console.log($scope.bid);
    
    productFactory.placeBid($scope.bid, function(returnedData){
      $scope.product1Max = $scope.bid1.bid
      console.log('bid Two', returnedData);
      $scope.bidz  = returnedData;
      $scope.index()
      console.log($scope.bidz);
    })
  }

  if($scope.bid1.bid[2] <= 0){
    alert('Your Bid must be greater than 0')
  // } else if($scope.bidbid[2]<= $scope.products[2].bids[los3].bid){
    alert('Your Bid must be higher than previous bid')
  } else {
    console.log($scope.bid1.bid[2]);
    $scope.bid.bid = scope.bid1.bid[2]
    console.log($scope.bid);
    productFactory.placeBid($scope.bid, function(returnedData){
      console.log('Bid Three',returnedData);
      $scope.bidz[2] = returnedData;
      console.log($scope.bidz);
    })
    console.log("bidzzzzz", $scope.bidz);
}
}
}])
