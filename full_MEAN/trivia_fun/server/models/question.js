var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var QuestionSchema = new Schema({
  question : String,
  cAnswer : String,
  fAnswerOne : String,
  fAnswerTwo : String,
  _user : {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps : true}, {collection: 'Question'})

var Question = mongoose.model('Question', QuestionSchema)
