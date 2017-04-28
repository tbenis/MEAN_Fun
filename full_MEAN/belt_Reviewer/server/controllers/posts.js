var mongoose = require('mongoose')
var Post = mongoose.model('Post')
var Topic = mongoose.model('Topic')
var Comment = mongoose.model('Comment')
var User = mongoose.model('User')


module.exports = {
    index: function(req, res) {
        Post.find({}).populate('_user').populate('_topic').exec(function(err, result) {
            if (err) {
                console.log('line 12 topics controller err finding all topics', err);
                res.json({
                    err
                })
            }

            res.json({
                result
            })
        })
    },
    show: function(req, res) {
        console.log(req.params);
        Topic.findOne({
                _id: req.params.id
            })
            .populate('_user')
            .populate('posts')
            .populate({path:'posts', populate: {path:'_user', model:'User'}})
            .populate({path:'posts', populate: {path:'comments', model:'Comment'}})
            .populate({path:'posts', populate: {path:'comments', model:'Comment', populate: {path:'_user', model:'User'}}})
            .exec(function(err, result) {
                console.log('line 23333', result);
                res.json(result)
            })
    },
    newPost: function(req, res) {
        var post = new Post({
            post: req.body.post,
            _user: req.body._user,
            _topic: req.body._topic
        })
        post.save(function(err) {
            if (err) {
                console.log('line 54 err saving', err);
            }
            console.log(req.body);
            Topic.findById(req.body._topic, function(err, topicfound) {
                if (err) {
                    console.log('err finding topic for new post');
                }
                topicfound.posts.push(post);
                console.log('line 40 saving post to topics', topicfound);
                topicfound.save(function(err) {
                    if (err) {
                        console.log('line 31 err saving', err);
                    }
                    User.findById(req.body._user, function(err, userfound) {
                        if (err) {
                            console.log('err finding topic for new post');
                        }
                        userfound.posts.push(post);
                        userfound.save(function(err) {
                            if (err) {
                                console.log('line 46 err saving', err);
                            }
                            res.json(post)
                        })
                    })
                })
                console.log('line 34', req.body._user);
            })
        })
    },
    up_vote : function(req, res){
      console.log(req.params);
      Post.findOneAndUpdate({_id : req.params.id}, { $inc: { up_votes: 1 }}, function(err, result){
        // result.up_votes = result.up_votes + 1
        // result.up_votes.save()
        console.log('reeesssuult', result);
        res.json(result)
      })
    },
    down_vote : function(req, res){
      Post.findOneAndUpdate({_id : req.params.id}, { $inc: { down_votes: 1 }}, function(err, result){
        // result.down_votes = result.down_votes + 1

        console.log('reeesssuult', result);
        res.json(result)
      })
    }
}
