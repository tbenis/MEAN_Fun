var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');


require('./server/config/mongoose.js')
var routes_setter = require('./server/config/routes.js')
routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})


//
//
// app.get('/', function(req, res) {
//     Song.find({}, function(err, results) {
//         if (err) {
//             console.log("ERROR**: ", err)
//         }
//         console.log("Results**: ", results)
//         res.render('show', {
//             songs: results
//         })
//
//     })
// })
//
// app.get('/add', function(req, res) {
//     res.render('add')
// })
//
// app.post('/processing', function(req, res) {
//     var song = new Song({
//         title: req.body.title,
//         album: req.body.album
//     })
//
//     song.save(function(err, result) {
//         if (err) {
//             console.log("**********")
//             console.log('we have errors', err)
//             console.log("**********")
//             res.redirect('/add')
//         } else {
//             res.redirect('/')
//         }
//     })
// })
// app.get('/edit/:id/', function(req, res) {
//     Song.find({
//         _id: req.params.id
//     }, function(err, response) {
//         if (err) {
//             console.log(err);
//         }
//         res.render('edit', {song: response[0]})
//     })
//
// });
//
// app.post('/:id', function(req, res) {
//     Song.update({_id: req.params.id}, req.body, function(err, result){
//       if(err){ console.log("errors:", err); }
//     })
//     res.redirect('/')
// })
//
// app.get('/show/:id', function(req, res) {
//     Song.find({}, function(err, songs) {
//         if (err) {
//             console.log(err);
//         }
//         res.render('showSpecific', {
//             songs: songs
//         })
//     })
// })
//
// app.post('/destroy/:id', function(req, res) {
//     Song.remove({_id : req.params.id}, function(err, songs) {
//         if(err){console.log(err);}
//           res.redirect('/')
//     })
//
// })
