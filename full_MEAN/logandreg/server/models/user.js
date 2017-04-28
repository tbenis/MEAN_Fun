var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  fname:  {
          type: String,
          required: [true, "Please Enter First Name"],
          trim: true,
        },
  lname: {
          type: String,
          required: [true, "Please Enter Last Name"],
          trim: true
        },
  email: String,
  bday:  {
    type : Date,
    required : true;
  }
  pword: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
          validator: function( value ) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );
          },
          message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }
}, {timestamps: true});
var User = mongoose.model('User', UserSchema);
