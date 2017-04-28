/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
// var topics = require('../controllers/topics.js')
// var posts = require('../controllers/posts.js')
// var comments = require('../controllers/comments.js')

module.exports = function(app){
  app.get('/user', users.index)

  app.post('/user', users.login)

}
