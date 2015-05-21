// Read and display /etc/hosts

var fs = require('fs');
fs.readFile('/etc/hosts', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});

// Read and display /etc/passwd

fs.readFile('/etc/passwd', 'utf8', function (err, data) {
  if (err) {
   return console.log(err);
  }
  console.log(data);
});

// Fail read and display /etc/missing
fs.readFile('/etc/missing', 'utf8', function (err, data) {
  if (err) {
   return console.log(err);
  }
  console.log(data);
});

