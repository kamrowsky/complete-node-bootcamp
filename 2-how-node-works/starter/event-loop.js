const fs = require('fs');

setTimeout(() => {console.log('timer 1 finished');}, 0);
setImmediate(() => console.log('immediate'));

fs.readFile('test-file.txt', () => {
    console.log("I/O");
});

console.log("Hello top-level");
