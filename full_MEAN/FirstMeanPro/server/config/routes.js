console.log('routes');
var friends = require('./../controllers/friends.js')

module.exports = function(app){
app.get('/friends', friends.index)

app.get('/friends/:id', friends.show)
// console.log('$$$$$$$$$$$$$$$$$$$$$$$')
// console.log('id', )
// console.log('$$$$$$$$$$$$$$$$$$$$$$$')
app.post('/friends/new', friends.create)

app.put('/friends/:id', friends.update)

app.delete('/friends/:id', friends.delete)
}
// this adds route listeners to friends for 5 of the 7 RESTful routes, excluding new and edit.
