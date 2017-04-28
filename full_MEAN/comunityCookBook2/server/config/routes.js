/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var recipes = require('../controllers/recipes.js')
// var posts = require('../controllers/posts.js')
// var comments = require('../controllers/comments.js')

module.exports = function(app){
  app.get('/user', users.index)
  app.get('/recipes', recipes.index)
  app.get('/aRecipe/:id', recipes.findRecipeInfo)

  app.delete('/recipe/:id', recipes.delete)

  app.post('/user', users.login)
  app.post('/new_recipe', recipes.newRecipe)
  app.post('/cookedTimes/:id', recipes.cookedTimes)
}
