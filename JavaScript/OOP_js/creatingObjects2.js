function Vehicle(name, number_of_wheels, passenger_count, speed){

    var distance_traveled = 0;
  var updateDistance= function(){
    distance_traveled+= self.speed
    return distance_traveled
  }

  this.name= name
  var self = this;
  this.wheels = number_of_wheels
  this.passenger = passenger_count
  this.speed = speed
  this.make_noise= function(){
     console.log("Vroom")
    return this
  }
  this.kind= function(){
    return console.log("I am a "+this.name+", I have "+this.wheels+" wheel(s), and i currently have "+ this.passenger+ " passenger(s), i say "+ this.make_noise() +" distance Travelled : " + updateDistance())
  }

  this.checkmiles = function(){
    return console.log(distance_traveled)
  }
  this.move =function(){
   console.log( "distance_traveled: "+distance_traveled, this.make_noise())
   return this
  }
}
var bike = new Vehicle('Bike', 2, 1,30)
bike.make_noise = function(){
  return 'ring ring'
}
bike.kind()
console.log("*******************************")
bike.checkmiles().move() //chainig/calling checkmiles before move throws an error (can't log move of undefined)
console.log("*******************************")
var sedan = new Vehicle('Sedan', 4, 5, 60)
sedan.make_noise = function(){
  return 'Honk Honk'
}
sedan.kind()

var bus = new Vehicle('Bus', 6, 15,25)
bus.make_noise = function(){
  return 'tss'
}

bus.passenger_count_add = function(){
  var pickingUp = 5
  bus.passenger += pickingUp
  return console.log( bus.passenger)
}
bus.kind()
bus.passenger_count_add()
