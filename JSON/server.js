var http = require('http');
var file = require('fs');
var server = http.createServer(function(req, res) {
    // res.writeHead(200, { 'ContentType': 'text/plain'}); doc file binh thuong
    res.writeHead(200, { 'ContentType': 'application/json'});
    var doituong = {
        ten: 'Nhien',
        job: 'developer',
        age: '17',
        address: 'viet nam'
    }
    res.end(JSON.stringify(doituong));
});

var port = 3400;
server.listen(port, '127.0.0.1');
console.log(`server running on port ${port}`);     