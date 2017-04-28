var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;

var AnswerSchema = new Schema({
  answer : String,
  ans_description : String,
  like: {type: Number, default: 0},
  _user : {type: Schema.Types.ObjectId, ref: 'User'},
  _question :  {type: Schema.Types.ObjectId, ref: 'Question'},

}, {timestamps: true}, {collection: 'Answer'})

var Answer = mongoose.model('Answer', AnswerSchema)
