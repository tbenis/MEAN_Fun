var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Model = mongoose.model;

var CommentSchema = new Schema({
  comment : String,
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  _post : {type: Schema.Types.ObjectId, ref: 'Post'},
}, {timestamps: true}, {collection: 'Comment'})

var Comment = mongoose.model('Comment', CommentSchema)
