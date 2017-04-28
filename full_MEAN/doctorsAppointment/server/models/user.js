var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var UserSchema = new Schema({
  name: String,
  appointments : [{type: Schema.Types.ObjectId, ref: 'Appointment'}],
}, {timestamps : true}, {collection: 'User'})

var User = mongoose.model('User', UserSchema)
