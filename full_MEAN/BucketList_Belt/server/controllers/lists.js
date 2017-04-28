var mongoose = require('mongoose')
var User = mongoose.model('User')
var List = mongoose.model('List')

module.exports = {
  changeBool :function(req, res){
    console.log(req.body);
    List.findById({_id: req.body._id._id}, function(err, result){
      if(err){
        console.log('you got an err', err);
      }
       result.done = req.body.val,

      result.save(function(err, done){
          console.log('YYYYY',done);
          res.json(done)
      })

    })
    console.log('(((())))',req.body);
  },
  addList: function(req, res){
    var list = new List({
    title : req.body.title,
    description : req.body.description,
    _taggedUser : req.body._taggedUser,
    _listCreator : req.body._listCreator,
    })
    list.save(function(err){
      if (err){
      }
      User.findById({_id: req.body._taggedUser}, function(err, result){
        result.lists.push(list)
        result.save(function(err){
          User.findById({_id : req.body._listCreator}, function(err, result2){
            result2.lists.push(list)
            result2.save(function(err){
              if(err){
              }
              res.json(list)
            })

          })
        })
      })
    })

  }
}
