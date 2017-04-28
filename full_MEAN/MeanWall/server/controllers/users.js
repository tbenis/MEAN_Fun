console.log('User controller');
var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {

  create : function(req, res){
    console.log('name : req.body.name', req.body.name)
    var user = new User({
      name : req.body.name
    })
    user.save(function(err){
      if(err){
        res.json({err:err})
      }
      else{
        res.json({})
      }
    })
  },

}
