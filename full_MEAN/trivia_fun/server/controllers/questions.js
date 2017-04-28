var mongoose = require('mongoose')
var User = mongoose.model('User')
var Question = mongoose.model('Question')

module.exports = {
  index : function(req, res){
    Question.find({}).exec(function(err, result){
      res.json(result)
    })
  },
  create : function(req, res){
    var question = new Question({
      _user : req.body._user,
      cAnswer : req.body.cAnswer,
      fAnswerOne : req.body.fAnswerOne,
      fAnswerTwo : req.body.fAnswerTwo,
      question : req.body.question
    })
    question.save(function(err){
      User.findById({_id: req.body._user}, function(err, result){
        result.questions.push(question)
        result.save(function(err){
          res.json(question)
        })
      })
    })
  },
  }
