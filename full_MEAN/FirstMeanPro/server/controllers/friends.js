console.log('friends controller');
var mongoose = require('mongoose')
var Friend = mongoose.model('Friend')

module.exports = {
  index: function(req,res){
    //your code here
    Friend.find({}, function(err, result){
      if(err){
        console.log('Error**', err)
        res.json({err: err})
      }
      console.log("Results**", result)
      res.json({result});
    })

  },
  create: function(req,res){
    //your code her
    console.log(req.body);
    var friend = new Friend({
      fname : req.body.fname,
      lname : req.body.lname,
      bday : req.body.bday
    })
    friend.save(function(err){
      console.log(req.body);
      if(err){
        console.log('Error saving**', err)
        res.json({err: err});
      }
      res.json({success: 'success'});
    })
  },
  update: function(req,res){
    //your code here
    Friend.update({_id: req.params.id}, req.body, function(err, result){
      // console.log('idddd', req.params.id)
      // console.log('$$$$$$$$$$$$$$$$$$$$$$$')
      // console.log('id', req.body)
      // console.log('$$$$$$$$$$$$$$$$$$$$$$$')
      if (err) {
        console.log("Erorr Updating**", err)
        res.json({'err': err})
      }
      res.json({result: result})
    })
  },
  delete: function(req,res){
    Friend.findByIdAndRemove({_id: req.params.id}, function (err, result){
      if(err){
        console.log("herrrr",err);
        res.json({err: err})
      }
      console.log("resulllllllyy", result);
      res.json({result : result});
    })

  },
  show: function(req,res){
    Friend.findOne({_id: req.params.id}, function(err, result){

      if(err){
        console.log('errrrr',err)
        res.json({err: err})
      }
      console.log('resssuuu',result)
      res.json({result: result})

    })

  }
}
