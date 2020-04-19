const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
    constructor() {
        super();

    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log('trhere was a new sale');
});
myEmitter.on('newSale', () => {
    console.log('trhcustomere');
});

myEmitter.on('newSale', stock => {
    console.log(`there are now ${stock}`);
});

myEmitter.emit('newSale', 9);

const server = http.createServer();
server.on('request', (req, res) => {
    console.log('request recived');
    res.end('requ received');
});

server.on('request', (req, res) => {
    console.log('request recivedsdasdadad 2');
});

server.on('close', (req, res) => {
    console.log('serv closed');
});

server.listen(8000, "localhost", () => {
    console.log('waiting for requests');
});