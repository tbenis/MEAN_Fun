
var _ = {
   map: function(arr, callback) {
    for(var i =0; i < arr.length; i++){
      arr[i] = callback(arr[i]);
    }
   },
   reduce: function(arr, callback, memo) {
     if(!memo){memo = 0;}
     for(var i =0; i < arr.length; i++){
       memo = callback(arr[i],memo)
       return memo
     }
      },
   find: function(arr, callback) {
     for(var i = 0; i < arr.length; i++){
      if(callback(arr[i])){
       return true
      }else{
       return false
       }
     }
   },

   filter: function(arr, callback) {
     var newArr = [];
     counter = 0;
    for(var i= 0; i< arr.length; i++){
      if(callback(arr[i])){
      newArr[counter] = callback(arr[i])
      counter++
      }
    }
    return newArr
   },
   reject: function(arr, callback) {
     var newArr1 = [];
     counter = 0;
    for(var i= 0; i< arr.length; i++){
      if(!callback(arr[i])){
      newArr1[counter] = callback(arr[i])
      counter++
      }
    }
    return newArr1
   }
 }

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens)
var evens1 = _.map([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens1)
var evens2 = _.reduce([1, 2, 3, 4, 5, 6], function(num, memo){ return num % 2 == 0; });
console.log(evens2)
var evens3 = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens3)
var evens4 = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens4)
