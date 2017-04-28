var mongoose = require('mongoose')
var User = mongoose.model('User')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')

module.exports = {
  aIndex : function(req, res){
    Answer.find({})
    .populate("_uTest")
    .sort('-percentage')
    .exec(function(err, result){
      console.log("All Answers",result);
      res.json(result)
    })
  },
  answerQuestion : function(req, res){
    console.log(req.body);
    var answer = new Answer({
      _uTest : req.body._uTest,
      score : req.body.score,
      percentage : req.body.percentage
    })
    answer.save(function(err){
      User.findById({_id: req.body._uTest}, function(err, result){
        // console.log(result);
        result.answers.push(answer)
        result.save(function(err){
          res.json(answer)
        })
      })
    })
  }
  }
