/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var lists = require('../controllers/lists.js')
// var posts = require('../controllers/posts.js')
// var comments = require('../controllers/comments.js')

module.exports = function(app){

app.get('/user', users.index)
app.get('/user/:id', users.show)
app.get('/aUser/:id', users.findUserId)
app.get('/user/info/:id', users.showUsersList)

app.post('/user', users.login)
app.post('/list', lists.addList)
app.post('/boolChange', lists.changeBool)
}
