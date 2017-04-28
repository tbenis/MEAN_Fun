var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    if (request.url === '/') {
        fs.readFile('views/new.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat1.jpg') {
        fs.readFile('images/cat1.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'images/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat2.jpg') {
        fs.readFile('images/cat2.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'images/jpg'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/images/cat3.jpg') {
        fs.readFile('images/cat3.jpg', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'images/jpg'
            });
            response.write(contents);
            response.end();
        });
      } else if (request.url === '/images/car1.jpeg') {
          fs.readFile('images/car1.jpeg', function(errors, contents) {
              response.writeHead(200, {
                  'Content-Type': 'images/jpeg'
              });
              response.write(contents);
              response.end();
          });
        } else if (request.url === '/images/car2.jpeg') {
            fs.readFile('images/car2.jpeg', function(errors, contents) {
                response.writeHead(200, {
                    'Content-Type': 'images/jpeg'
                });
                response.write(contents);
                response.end();
            });
          } else if (request.url === '/images/car3.jpeg') {
              fs.readFile('images/car3.jpeg', function(errors, contents) {
                  response.writeHead(200, {
                      'Content-Type': 'images/jpeg'
                  });
                  response.write(contents);
                  response.end();
              });
    } else if (request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
    } else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.write(contents);
            response.end();
        });
        //did'nt match anything
    } else {
        response.writeHead(404);
        response.end('file not found!!!');

    }
});
server.listen('7077')
console.log('listening from 7077')
