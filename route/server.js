var http = require('http');
var file = require('fs');

var server = http.createServer(function(req, res) {
    console.log('nguoi dung yeu cau link ' + req.url);

    if (req.url === '/home') {
        res.writeHead(200, { 'ContentType': 'text/html'});
        file.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/login') {
        res.writeHead(200, { 'ContentType': 'text/html'});
        file.createReadStream(__dirname + '/login.html').pipe(res);
    } else if (req.url === '/api/register') {
        var register = [{
            name: 'Vu DUy Nhien',
            age: '21',
            userName: 'admin',
            password: 'admin'
        }];
        res.writeHead(200, { 'ContentType': 'application/json'});
        res.end(JSON.stringify(register));
    } else if (req.url === '/404') {
        res.writeHead(404, { 'ContentType': 'text/html'});
        file.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

var port = 3410;
server.listen(port, '127.0.0.1');
console.log(`server running on port ${port}`);     