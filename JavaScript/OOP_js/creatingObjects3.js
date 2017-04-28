function Vehicle(name, number_of_wheels, passenger_count, speed) {

  /***************************************************************************
        PRIVATE VARIABLES
  ****************************************************************************/
  var self = this;
  var distance_traveled = 0;
  /***************************************************************************
        PRIVATE METHOD(s)
  ****************************************************************************/
  var updateDistance = function() {

    var distancetraveled= distance_traveled += self.speed;
    return distancetraveled
  }

  /***************************************************************************
        PUBLIC VARIABLES
  ****************************************************************************/
  this.name = name;
  this.wheels = number_of_wheels;
  this.passenger = passenger_count;
  this.speed = speed;

  /***************************************************************************
        Public Prototypal Methods
  ****************************************************************************/

  Vehicle.prototype.make_noise = function() {
      console.log("Vroom");
      return this
  }
  Vehicle.prototype.kind = function() {
      console.log(`I am a ${this.name}, I have  ${this.wheels}  wheel(s), and i currently have ${this.passenger} passenger(s), i say '${this.make_noise()}'. distance Travelled : ${updateDistance()}mph`)
      return this
  }

  Vehicle.prototype.checkmiles = function() {
      console.log(`Distance Travelled: ${distance_traveled}`)
      return this
  }
  Vehicle.prototype.move = function() {
      console.log("distance_traveled: " + distance_traveled, this.make_noise())
      return this
  }
  Vehicle.prototype.genVIN= function(){
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      var result = '';
      for (var i = 17; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
      console.log(`${this.name} VIN: ${result}`);
    return this
  }
}


var Bike = new Vehicle('Bike', 2, 1, 30)
var Sedan = new Vehicle('Sedan', 4, 5, 60)
var Bus = new Vehicle('Bus', 6, 15, 25)
/***************************************************************************
      Bike Object Method
****************************************************************************/

Bike.make_noise = function() {
    return 'ring ring'
    return this
}
console.log("************Bike*******************")
Bike.kind().move().checkmiles().genVIN()
console.log("***********End Bike********************")

/***************************************************************************
      Sedan Object Method
****************************************************************************/

Sedan.make_noise = function() {
    return 'Honk Honk'
    return this
}
console.log("*************SEDAN******************")
Sedan.kind().move().checkmiles().genVIN()
console.log("*************End SEDAN******************")
/***************************************************************************
      Bus Object Method
****************************************************************************/

Bus.make_noise = function() {
    return 'tss'
    return this
}
Bus.passenger_count_add = function() {
    var pickingUp = 5
    Bus.passenger += pickingUp
    return console.log(Bus.passenger)
}

console.log("*************BUS******************")
Bus.passenger_count_add()
Bus.kind().move().checkmiles().genVIN()
console.log("*************End BUS******************")
