var http = require('http');
var server = http.createServer(function(req, res) {
  res.write("Hello world!yeah!a\n");
  res.end();
}).listen(8080);