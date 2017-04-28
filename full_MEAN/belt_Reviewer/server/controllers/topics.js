var mongoose = require('mongoose')
var Topic = mongoose.model('Topic')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')
var User = mongoose.model('User')

module.exports = {
  index : function(req, res){
    Topic.find({})
    .populate('_user')
    .populate('_posts')
    .sort('-createdAt')
    .exec( function(err, result){
      if(err){
        console.log('line 11 topics controller err finding all topics', err);
        res.json({err})
      }
      res.json({result})
    })
  },

  newTopic : function(req, res){
    console.log('line 9 topics controller', req.body._id);
    User.findById( req.body._id, function(err, user) {
      console.log('line 18 topics controller', user);
      var topic = new Topic({
        topic : req.body.topic,
        description : req.body.description,
        category : req.body.category,
        descprition : req.body.description,
        _user: req.body._id,
      })
			console.log('line 12 topics controller', topic)
			user.topics.push(topic);
			user.save(function(err){
      })
    var topic = new Topic({
      topic : req.body.topic,
      description : req.body.description,
      category : req.body.category,
      description : req.body.description,
      _user: req.body._id,
    })
    topic.save(function(err){
      if(err){

        res.json(err)
        }
        else {
          console.log('line 30 topics controller',topic);
          res.json(topic)
        }
    })

  })
  }
}
