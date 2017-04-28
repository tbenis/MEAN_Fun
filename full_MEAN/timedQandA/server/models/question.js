var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var Model = mongoose.model;

var QuestionSchema = new Schema({
  question : String,
  quest_description: String,
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  answers : [{type: Schema.Types.ObjectId, ref: 'Answer'}],

}, {timestamps: true}, {collection: 'Question'})

var Question = mongoose.model('Question', QuestionSchema)
