var mongoose = require('mongoose')
var User = mongoose.model('User')
var Answer = mongoose.model('Answer')
var Question = mongoose.model('Question')

module.exports = {
    index: function(req, res) {
        Question.find({}, function(err, result) {
            res.json(result)
        })
    },

    showQuest : function(req, res){
      console.log('ttrtrt',req.params);
      Question.findById({_id: req.params.id})
      .populate('answers')
      .populate({path:'answers', populate: {path:'_user', model:'User'}})
      // .sort('-likes')
      .exec(function(err, result){
        console.log(result);
        res.json(result)
      })
    },
    newQuestion: function(req, res) {
        console.log(req.body);
        var question = new Question({
            question: req.body.question,
            quest_description: req.body.quest_description,
            _user: req.body._user
        })
        question.save(function(err) {
            if (err) {
                console.log(err)
            }
            User.findById({
                _id: req.body._user
            }, function(err, result) {
                console.log('line 15', result);
                result.questions.push(question)
                result.save()
                res.json(question)
            })
        })

    }
}
