var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var AppointmentSchema = new Schema({
  name: String,
  _creator : {type: Schema.Types.ObjectId, ref: 'User'},
  date : Date,
  time: String,
  complain : String
}, {timestamps : true}, {collection: 'Appointment'})

var Appointment = mongoose.model('Appointment', AppointmentSchema)
