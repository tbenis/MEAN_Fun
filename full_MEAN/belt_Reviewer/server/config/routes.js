/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var topics = require('../controllers/topics.js')
var posts = require('../controllers/posts.js')
var comments = require('../controllers/comments.js')

module.exports = function(app){
  app.get('/user', users.index)
  app.get('/topics', topics.index)
  app.get('/posts', posts.index)
  app.get('/topic/:id', posts.show)
  app.get('/user/:id', users.forProfile)

  app.post('/user', users.login)
  app.post('/topics', topics.newTopic)
  app.post('/posts', posts.newPost)
  app.post('/comments/:id', comments.newComment)
  app.post('/upvote/:id', posts.up_vote)
  app.post('/downvote/:id', posts.down_vote)

}
