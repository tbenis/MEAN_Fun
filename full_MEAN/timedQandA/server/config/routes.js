/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var answers = require('../controllers/answers.js')

module.exports = function(app){
app.get('/question', questions.index)
app.get('/question/:id', questions.showQuest)

app.post('/user', users.login)
app.post('/question', questions.newQuestion)
app.post('/answer', answers.newAnswer)
app.post('/like/:id', answers.like)

}
