var mainFunc = require('util');
var eventne = require('events');

// var test = new eventne.EventEmitter();

// test.on('something', function(msg) {
//     console.log(msg);
// });

// test.emit('someThing', 'Hello guys, how are you');

var Person = function(name) {
    this.name = name;
}
mainFunc.inherits(Person, eventne.EventEmitter());

