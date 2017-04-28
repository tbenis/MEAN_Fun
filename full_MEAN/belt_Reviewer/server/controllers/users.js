var mongoose = require('mongoose')
var User = mongoose.model('User')
var Topic = mongoose.model('Topic')
var Post = mongoose.model('Post')
var Comment = mongoose.model('Comment')


module.exports = {
  index: function(req, res) {
      User.find({}, function(err, result) {
          if (err) {
              console.log('err finding all users', err);
              res.json({
                  err: err
              })
          } else {
              // console.log('all users', result);
              res.json({
                  result: result
              })
          }
      })
  },
  forProfile: function(req, res) {
      console.log(req.params);
      User.findOne({
          _id: req.params.id
      }, function(err, result) {
          console.log('forProfile resultis: ', result);
          res.json(result)
      })
  },
  login: function(req, res) {
      User.findOne({name: req.body.name}, function(err, user) {
          console.log('result', user);
          if(user) {
              console.log('result isn NOT null so SO FOUND', user);
              res.json(user)
          } else{
          var user = new User({
              name: req.body.name
          })
          user.save(function(err) {
              if (err) {
                  console.log('err saving user');
                  res.json({
                      error: 'error saving user'
                  })
              } else {
                  console.log('New User Created', user);
                  res.json(user)
              }
            })
          }
      })
    }
  }
