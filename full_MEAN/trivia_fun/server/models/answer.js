var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var AnswerSchema = new Schema({
  score : Number,
  percentage : Number,
  _uTest : {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps : true}, {collection: 'Answer'})

var Answer = mongoose.model('Answer', AnswerSchema)
