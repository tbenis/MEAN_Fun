var mongoose = require('mongoose')
var User = mongoose.model('User')
var Appointment = mongoose.model('Appointment')

module.exports = {
  index : function(req, res){
    Appointment.find({}).populate('_creator').sort('date').exec(function(err, result){
      res.json(result)
    })
  },
  delete : function(req, res){
  Appointment.findByIdAndRemove(req.params.id, function(err, deleted){
    res.json(deleted)
  })
},
  newAppointment: function(req, res){
    console.log("This is the time collected:: ", req.body.time.toString());
    var appointment = new Appointment({
      _creator : req.body._creator,
      date : req.body.date,
      time : req.body.time,
      complain: req.body.complain
    })
    appointment.save(function(err){
      User.findById({_id: req.body._creator}, function(err, result){
        result.appointments.push(appointment)
        result.save(function(err){
          res.json(appointment)
        })
      })
    })
  }
  }
