// Start a server on Port 8080
// Write contents of /etc/hosts as response

var fs = require('fs');
var http = require('http');

var requestListener = function (request, response) {
	var newFile = fs.createWriteStream("output.text");

	request.pipe(newFile);
	request.on('end', function() {
		response.end();
	});
}

var server = http.createServer(requestListener);
server.listen(8080);
console.log("Listening on port 8080")

// curl --upload-file file.jpg http://localhost:8080