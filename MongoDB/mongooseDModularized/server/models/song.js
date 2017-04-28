var mongoose = require('mongoose')
var SongSchema = new mongoose.Schema({
    title: {
        type: String
    },
    album: {
        type: String
    }
})
var Song = mongoose.model('Song', SongSchema);
