var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var UserSchema = new Schema({
  name: String,
  recipes: [{type: Schema.Types.ObjectId, ref: 'Recipe'}],
  // _bidder : {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps : true}, {collection: 'User'})

var User = mongoose.model('User', UserSchema)
