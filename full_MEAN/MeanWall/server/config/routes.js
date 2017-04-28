console.log('routes');
var users = require('./../controllers/users.js')
var posts = require('./../controllers/posts.js')
module.exports = function(app){
  app.post('/users', users.create)
  // app.get('/users/:id', users.getone)

}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
