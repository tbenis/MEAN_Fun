var findSum = function(arr){
  var sum = arr[0];
  for(var i = 1; i< arr.length; i++){
    sum += arr[i];
  }
  return sum
}
var findMin = function(arr1){
  var min = arr[0];
  for(var i = 1; i< arr1.length; i++){
    if(arr[i]< min){
      min = arr[i];
    }
  }
}

var findAvg = function(){
  findSum();
  var avg = sum/arr.length;
}


var person = {
  name= 'Benis',
  distance_traveled = 0
}
// say_name - should alert the object’s name property
// console.log(person.name)

// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
person.say_something = function(a){
 return this.name + " says "+ a
}

// myObject.say_something(person.name)
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
person.walk =function(b){
var str = "is walking";
person.distance_traveled += 3;
alert(b + " " + str + " distance_traveled: " + person.distance_traveled);
}
person.walk(person.name)

// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
person.run =function(c){
var str = "is running";
person.distance_traveled += 10;
alert(c + " " + str + " distance_traveled: " + person.distance_traveled);
}
person.run(person.name)

// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
person.crawl =function(d){
var str = "is crawling";
person.distance_traveled += 1;
alert(d + " " + str + " distance_traveled: " + person.distance_traveled);
}
person.crawl(person.name)

// function say_something(name){
//   var str = "I am cool";
//   return name + " says " + str;
// }
// say_something('Benis')
