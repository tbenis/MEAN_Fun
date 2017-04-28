var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {
  index: function(req, res) {
      User.find({})
      .exec(function(err, result) {
          if (err) {
              console.log('err finding all users', err);
              res.json({
                  err: err
              })
          } else {
              console.log('all users', result);
              res.json({ result})
          }
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
