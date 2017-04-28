var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name:  {type: String, required : true, unique : true}
}, {timestamps: true})
var User = mongoose.model('User', UserSchema);
