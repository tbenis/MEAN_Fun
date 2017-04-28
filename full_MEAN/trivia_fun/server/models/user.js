var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var UserSchema = new Schema({
  name: String,
  questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
answers : [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps : true}, {collection: 'User'})

var User = mongoose.model('User', UserSchema)
