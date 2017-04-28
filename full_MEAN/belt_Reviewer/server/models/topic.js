var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Model = mongoose.model;

var TopicSchema = new Schema({
  topic : String,
  description: String,
  category: String,
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  posts : [{type: Schema.Types.ObjectId, ref: 'Post'}],

}, {timestamps: true}, {collection: 'Topic'})

var Topic = mongoose.model('Topic', TopicSchema)
