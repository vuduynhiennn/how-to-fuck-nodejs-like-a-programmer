function sayHello() {
    console.log('Hello');
};

function sayCuto(func) {
    func();
}


var cuTo = function sayGoodbye() {
    console.log('say Goodbye');
}

sayCuto(cuTo);



