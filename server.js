// Start a server on Port 8080
// Write contents of /etc/hosts as response

var fs = require('fs');
var http = require('http');

var requestListener = function (request, response) {
	response.writeHead({'Content-type': "text/html"});
	fs.readFile('/etc/hosts', 'utf8', function (err, data) {
	  if (err) {
	    return console.log(err);
	  }
  	response.write(data);
		response.end();
	});
}

var server = http.createServer(requestListener);
server.listen(8080);
console.log("Listening on port 8080")

