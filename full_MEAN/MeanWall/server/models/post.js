var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  post :  String,

}, {timestamps: true})
var Friend = mongoose.model('Post', PostSchema);
