var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var ProductSchema = new Schema({
  name: String,
  bids : [{type: Schema.Types.ObjectId, ref: 'Bid'}],
}, {timestamps : true}, {collection: 'Product'})

var Product = mongoose.model('Product', ProductSchema)
