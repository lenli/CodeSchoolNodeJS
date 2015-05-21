// Start a server on Port 8080
// Write request to local file

var fs = require('fs');
var http = require('http');

var requestListener = function (request, response) {
	// var readStream= fs.createReadStream("/etc/hosts")
	var writeStream = fs.createWriteStream("output.text");
	var fileBytes = request.headers['content-length'];
	var uploadedBytes = 0;
	var completionPercentage = 0;

	request.pipe(writeStream);
	request.on('data', function(chunk) {
		uploadedBytes += chunk.length
		var currentCompletionPercentage = Math.round(uploadedBytes*100/fileBytes) * 100/100
		if (currentCompletionPercentage != completionPercentage) {
			completionPercentage = currentCompletionPercentage;
			response.write('Progress: '+ completionPercentage + '%\n');
		}
	});
	request.on('end', function() {
		response.end();
	});
}

var server = http.createServer(requestListener);
server.listen(8080);
console.log("Listening on port 8080")

// curl --upload-file file.jpg http://localhost:8080