var songs = require('../controllers/songs.js');
module.exports = function(app){
    app.get('/', songs.show)

    app.get('/add', function(req, res) {
        res.render('add')
    })
    app.post('/processing', songs.create)
    app.get('/edit/:id/', songs.edit)
    app.post('/:id', songs.update)
    app.get('/show/:id', songs.find)
    app.post('/destroy/:id', songs.destroy)
}
