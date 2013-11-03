// The answer to the question of life, the universe, and everything... 

var https = require('http');
var fs = require('fs');

var options = {
  keys:     ('./your-key.pem'),
  cert:     ('./your-cert-key.pem');
}

var server = http.createServer(options, function(request, response) {
  response.write(200);
  response.end('The Answer to the Ultimate Question of Life, the Universe, and Everything... is 42.');
});

server.listen(4200);
console.log('You will find the answer at port 4200');
  
