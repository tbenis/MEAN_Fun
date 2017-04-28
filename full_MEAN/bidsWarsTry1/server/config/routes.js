/*
require all controllers: eg var ninjas = require('../controllers/ninjas.js')
*/
var users = require('../controllers/users.js')
var products = require('../controllers/products.js')
var bids = require('../controllers/bids.js')
// var comments = require('../controllers/comments.js')

module.exports = function(app){
app.get('/user', users.index)
app.get('/product', products.index)

app.delete('/bids', bids.delete)

app.post('/user', users.login)
app.post('/bid', bids.placeBid)
}
