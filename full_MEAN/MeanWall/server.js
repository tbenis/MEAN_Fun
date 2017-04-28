var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bodyParser = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8009,
    app      = express();
// bodyParser.urlencoded(options)
// Returns middleware that only parses urlencoded bodies. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.
//
// A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array
// (when extended is false), or any type (when extended is true).
// ************************************************************/


// app.use(bodyParser.urlencoded({extended: true}));
app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bodyParser.json())


require('./server/config/mongoose.js')
require("./server/config/routes.js")(app);



app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
