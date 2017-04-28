var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/nickisongs');

var SongSchema = new mongoose.Schema({
    title: {
        type: String
    },
    album: {
        type: String
    }
})

mongoose.model('Song', SongSchema);
var Song = mongoose.model('Song');

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    Song.find({}, function(err, results) {
        if (err) {
            console.log("ERROR**: ", err)
        }
        console.log("Results**: ", results)
        res.render('show', {
            songs: results
        })
    })
})

app.get('/add', function(req, res) {
    res.render('add')
})

app.post('/processing', function(req, res) {
    var song = new Song({
        title: req.body.title,
        album: req.body.album
    })

    song.save(function(err, result) {
        if (err) {
            console.log("**********")
            console.log('we have errors', err)
            console.log("**********")
            res.redirect('/add')
        } else {
            res.redirect('/')
        }
    })
})
app.get('/edit/:id/', function(req, res) {
    Song.find({
        _id: req.params.id
    }, function(err, response) {
        if (err) {
            console.log(err);
        }
        res.render('edit', {song: response[0]})
    })

});

app.post('/:id', function(req, res) {
    Song.update({_id: req.params.id}, req.body, function(err, result){
      if(err){ console.log("errors:", err); }
    })
    res.redirect('/')
})

app.get('/show/:id', function(req, res) {
    Song.find({}, function(err, songs) {
        if (err) {
            console.log(err);
        }
        res.render('showSpecific', {
            songs: songs
        })
    })
})

app.post('/destroy/:id', function(req, res) {
    Song.remove({_id : req.params.id}, function(err, songs) {
        if(err){console.log(err);}
          res.redirect('/')
    })

})

app.listen(8002, function() {
    console.log("listening on port 8000");
})
