var mongoose = require('mongoose');
var Song = mongoose.model('Song');

module.exports= {

  show :  function(req, res) {
      Song.find({}, function(err, results) {
          if (err) {
              console.log("ERROR**: ", err)
          }
          console.log("Results**: ", results)
          res.render('show', {
              songs: results
          })
        })
      },

  create: function(req, res) {
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
  },

edit:  function(req, res) {
    Song.find({
        _id: req.params.id
    }, function(err, response) {
        if (err) {
            console.log(err);
        }
        res.render('edit', {song: response[0]})
    })

},

update: function(req, res) {
    Song.update({_id: req.params.id}, req.body, function(err, result){
      if(err){ console.log("errors:", err); }
    })
    res.redirect('/')
},

find: function(req, res) {
    Song.find({}, function(err, songs) {
        if (err) {
            console.log(err);
        }
        res.render('showSpecific', {
            songs: songs
        })
    })
},
destroy: function(req, res) {
    Song.remove({_id : req.params.id}, function(err, songs) {
        if(err){console.log(err);}
          res.redirect('/')
    })

}
}


/**************************************************/








/**************************************************/
