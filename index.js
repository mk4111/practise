var Http = require('http');

var port = 4000;

function handler(req, res) {
  console.log(process.env.PORT);
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>WOAH</h1>");
}

Http.createServer(handler).listen(port);
