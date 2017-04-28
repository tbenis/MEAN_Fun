var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var UserSchema = new Schema({
  name: String,
}, {timestamps : true}, {collection: 'User'})

var User = mongoose.model('User', UserSchema)
