var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Chay xong roi');
});

server.listen(2333, '127.0.0.1');

console.log('server running on port 3333'); 