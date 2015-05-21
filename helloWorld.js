
var http = require('http');

var requestListener = function (request, response) {
		response.writeHead(200);
	  response.end('Hello World\n');
}

var server = http.createServer(requestListener);
server.listen(8080);