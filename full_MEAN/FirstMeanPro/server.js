var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var root = __dirname;
var port = process.env.port || 8000;
var app = express()

app.use(express.static(path.join(root, "client")))
app.use(express.static(path.join(root, "bower_components")))
app.use(express.static(path.join(root, "static")))
app.use(bodyParser.json())

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);

app.listen(port, function(){
  console.log(`server running on ${port}`)
})
