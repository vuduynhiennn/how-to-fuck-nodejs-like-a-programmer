console.log("Hello world");

let time = 0;

let timer = setInterval(() => {
    time += 2;
    console.log('time ' + time);
    if (time > 10) {
        clearInterval(timer);
    }
}, 1000);