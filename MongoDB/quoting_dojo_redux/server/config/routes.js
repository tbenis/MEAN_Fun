var quotes = require('../controllers/quotes.js');
module.exports = function(app){
  app.get('/', function(req, res){
    res.render('main')
  })
  app.post('/processing', function(req, res){
    quotes.create(req, res)
  })
  app.get('/quotes', function(req, res){
    quotes.show(req, res);
  })

}
