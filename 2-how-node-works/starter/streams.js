const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log('err');
    //     res.end(data);
    // })

    // solution 2: streams
    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data', chunk => {
    //     res.write(chunk);
    // });
    // readable.on('end', () => {
    //     res.end();
    // });
    // readable.on('error', err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end();
    // });

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    // readableSoure.pipe(writeableDest)
});

server.listen(8000, 'localhost', () => {
    console.log('listening');
});