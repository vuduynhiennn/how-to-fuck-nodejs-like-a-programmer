var file = require('fs');

var doclong = file.createReadStream(__dirname + '/readme.txt', { encoding: 'utf8'});
var ghiluong = file.createWriteStream(__dirname + '/writeMe.txt');

doclong.on('data', function(chunk) {
    console.log('doc luong nao');
    console.log(chunk);
})

doclong.on('data', function(chunk) {
    console.log('ghi luong nao');
    ghiluong.write(chunk);
})