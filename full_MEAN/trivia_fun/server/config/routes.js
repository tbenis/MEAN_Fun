/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var answers = require('../controllers/answers.js')
// var comments = require('../controllers/comments.js')

module.exports = function(app){
app.get('/user', users.index)
app.get('/question', questions.index)
app.get('/answer', answers.aIndex)

app.post('/user', users.login)
app.post('/question', questions.create)
app.post('/answer', answers.answerQuestion)

// app.delete('/appointment/:id', appointments.delete)
}
