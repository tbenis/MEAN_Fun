function VehicleConstructor(name, number_of_wheels, passenger_count){
  return{
    name : name,
    number_of_wheels: number_of_wheels,
    passenger_count: passenger_count,
    make_noise: function(){
      return console.log("Vroom")
    },
    kind: function(){
      return console.log(`I am a ${name}, I have ${number_of_wheels} wheel(s), and i currently have ${passenger_count} passenger(s), i say ` + this.make_noise())
    }
    
  }
}
var bike = VehicleConstructor('Bike', 2, 1)
bike.make_noise = function(){
  return 'ring ring'
}
bike.kind()
var sedan = VehicleConstructor('Sedan', 4, 5)
sedan.make_noise = function(){
  return 'Honk Honk'
}
sedan.kind()
var bus = VehicleConstructor('Bus', 6, 15)
bus.make_noise = function(){
  return 'tss'
}

bus.passenger_count_add = function(){
  var pickingUp = 5
  bus.passenger_count += pickingUp
  return console.log( bus.passenger_count)
}
bus.kind()
bus.passenger_count_add()
