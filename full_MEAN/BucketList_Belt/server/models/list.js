var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var ListSchema = new Schema({
  title: String,
  description: String,
  _listCreator: {type: Schema.Types.ObjectId, ref: 'User'},
  _taggedUser : {type: Schema.Types.ObjectId, ref: 'User'},
  done: {type: Boolean, default: false}
}, {timestamps : true}, {collection: 'List'})

var List = mongoose.model('List', ListSchema)
