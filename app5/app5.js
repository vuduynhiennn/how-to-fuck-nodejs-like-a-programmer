var file = require('fs');   
console.log('Bat dau: ');
var readFile = file.readFileSync('data.txt', 'utf8');
console.log('thuc hien' + readFile);
console.log('ket thuc');