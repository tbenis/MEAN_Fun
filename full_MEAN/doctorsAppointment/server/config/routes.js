/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var appointments = require('../controllers/appointments.js')
// var posts = require('../controllers/posts.js')
// var comments = require('../controllers/comments.js')

module.exports = function(app){
app.get('/user', users.index)
app.get('/appointments', appointments.index)

app.post('/user', users.login)
app.post('/appointment', appointments.newAppointment)

app.delete('/appointment/:id', appointments.delete)
}
