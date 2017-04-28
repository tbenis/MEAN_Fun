var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var BidSchema = new Schema({
  bid : Number,
  _product : {type: Schema.Types.ObjectId, ref: 'Product'},
  _bidder : {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps : true}, {collection: 'Bid'})

var Bid = mongoose.model('Bid', BidSchema)
