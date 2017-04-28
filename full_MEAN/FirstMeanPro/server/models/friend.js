var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
  fname:  String,
  lname: String,
  bday:  Date
}, {timestamps: true})
var Friend = mongoose.model('Friend', FriendSchema);
