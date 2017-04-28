var mongoose = require('mongoose')
var User = mongoose.model('User')
var Answer = mongoose.model('Answer')
var Question = mongoose.model('Question')

module.exports = {
  like : function(req, res){
    Answer.findOneAndUpdate({_id: req.params.id}, { $inc: { like: 1 }}, function(err, result){
      console.log('forund question',result);
      res.json(result)
    })
  },
        newAnswer: function(req, res) {
                var answer = new Answer({
                    answer: req.body.answer,
                    ans_description: req.body.ans_description,
                    _user: req.body._user,
                    _question: req.body._question
                })

                answer.save(function(err) {
                        if (err) {
                            console.log(err);
                        }
                        User.findById({
                            _id: req.body._user
                        }, function(err, result) {
                            console.log('line 15', result);
                            result.answers.push(answer)
                            result.save()
                            Question.findById({
                                _id: req.body._question
                            }, function(err, result) {
                                console.log('line 15', result);
                                result.answers.push(answer)
                                result.save()
                                res.json(answer)
                            })
                        })
                    })
                }
              }
