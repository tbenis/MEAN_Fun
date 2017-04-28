var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var UserSchema = new Schema({
  name: String,
  // bids: [{type: Schema.Types.ObjectId, ref: 'Bid'}],
  // _bidder : {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps : true}, {collection: 'User'})

var User = mongoose.model('User', UserSchema)
