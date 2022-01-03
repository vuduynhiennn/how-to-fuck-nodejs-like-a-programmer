var express = require('express');
var app = express();

app.get('/', function() {
    res.sendFile(__dirname + '/index.html', 'utf8');

})

app.listen(8088);