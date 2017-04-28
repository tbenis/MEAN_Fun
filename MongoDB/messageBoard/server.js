var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/message_board');

var MessageSchema = new mongoose.Schema({
  name: {type : String, required: true, minlength: 3},
  message: {type : String, required: true},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true})

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = new mongoose.Schema({
  _message : {type: Schema.Types.ObjectId, ref: 'Message'},
  commenter : {type : String},
  comment: {type : String},
}, {timestamps: true})

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
        Message.find({}).populate('comments').exec(function(err, results){
          console.log('&&&&comment:', results)

          res.render('index', {results})

})
})

app.post('/mprocessing', function(req, res) {
    var message = new Message({
        name: req.body.name,
        message: req.body.message
    })

    message.save(function(err, result) {
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
app.post('/cprocessing/:id', function (req, res){
    Message.findOne({_id: req.params.id}, function(err, message){
        var comment = new Comment({commenter: req.body.cname, comment: req.body.comment});
        comment._message = message._id;
        message.comments.push(comment);
        comment.save(function(err){
           if (err) {console.log('**** comment Error', err);}
          message.save(function(err){
                     if (err) {console.log('Error');}
                     else {res.redirect('/');}
                   })
                 });
               });
             })
app.listen(8000, function() {
    console.log("listening on port 8000");
})
