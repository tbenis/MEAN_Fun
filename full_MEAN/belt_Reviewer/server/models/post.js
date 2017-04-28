var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var PostSchema = new Schema({
  post : String,
  up_votes: {type: Number, default: 0},
  down_votes: {type: Number, default: 0},
  comments : [{type : Schema.Types.ObjectId, ref: 'Comment'}],
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  _topic :  {type: Schema.Types.ObjectId, ref: 'Topic'},

}, {timestamps: true}, {collection: 'Post'})

var Post = mongoose.model('Post', PostSchema)
