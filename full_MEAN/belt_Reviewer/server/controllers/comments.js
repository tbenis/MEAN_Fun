var mongoose = require('mongoose')
var Comment = mongoose.model('Comment')
var Topic = mongoose.model('Topic')
var Post = mongoose.model('Post')
var User = mongoose.model('User')


module.exports = {
newComment : function(req, res){
  // console.log('tttttttt', req.body, req.params);
  var comment = new Comment({
    comment: req.body.comment,
    _user : req.body._user,
    _post : req.params.id
  })
  comment.save(function(err){
    if(err){
      console.log('err saving userrr');
    }
  User.findById(req.body._user, function(err, userfound){
    // console.log('*******',userfound);
    userfound.comments.push(comment);
    userfound.save(function(err){
        if (err) {
            console.log('line 26 err saving', err);
        }
    Post.findById(req.params.id, function(err, result){
      console.log('*******',result);
      result.comments.push(comment)
      result.save(function(err){
        if (err) {
            console.log('line 31 err saving', err);
        }
        res.json(comment)
      })
    })
    })

    })
  })
}

}
