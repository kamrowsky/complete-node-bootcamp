const fs = require('fs');
const http = require('http');
const url = require('url');

const replace = require('./modules/replaceTemplate');

// FILES

// blocking synchronous
// const text = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log('%c text:', 'color: lime', text);
// 
// const textOut = `this  is what we know about avocado: ${text}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// 
// // async
// fs.readFile('./txt/start.txt', (err, data) => {
//     if (err) return;
//     console.log(data);
// });
// console.log('will read');

// SERVER
const server = http.createServer((req, res) => {
    const path = req.url;

    
    switch (path) {
        case '/overview':
            replace();
            res.end('/overview');
            break;
        case '/product':
            res.end('/product');
            break;
        default:
            res.writeHead(404, {
                'Content-type': 'text/html',
            });
            break;
    }
    res.end('buuuu');

});

server.listen(8000, 'localhost', () => {
    console.log('%c listening', 'color: lime');
});