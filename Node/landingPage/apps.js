//get the http module:
var http = require('http');
//fs module allows us to read and write content for responses
var fs = require('fs');
//creating a sever using http module:
var server = http.createServer(function(request, response) {
    //See what URL the clients are requesting
    console.log('client request URL:', request.url);
    //this is how we do routing:
    if (request.url === '/') {
        fs.readFile('index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/dojos/new') {
        fs.readFile('dojos.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/BookReader.png') {
        fs.readFile('BookReader.png', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'images'
            })
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/many.png') {
        fs.readFile('many.png', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'images/png'
            });
            response.write(contents);
            response.end();
        });
        //did'nt match anything
    } else {
        response.end(function() {
            console.log('File Not Found')
        });
    }
});
//tell server where to listen on
server.listen(6789);
console.log("Running in localhost at port 6789");
