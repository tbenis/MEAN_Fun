var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var UserSchema = new Schema({
  name: String,
  topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
	posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps : true}, {collection: 'User'})

var User = mongoose.model('User', UserSchema)
