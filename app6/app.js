let file = require('fs');

// file.unlink('data.txt');

// file.mkdirSync('hacked.html');
// file.rmdirSync('hacked.html');
file.mkdir('public', function() {
    file.readFile('README.md', 'utf8', function(err, data) {
        file.writeFileSync('./app6/public/rsult.text', data);
    });
});