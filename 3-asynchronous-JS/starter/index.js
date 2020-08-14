const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err,data) => {
            if (err) reject('I cdnt find the file');
            resolve(data);
        });
    });
};

readFilePro(`${__dirname}/dog.txt`)
    .then(data => {
        superagent
        .get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then(res => {
            if (err) return console.log(err.message);
            console.log(res.body.message);
        
            fs.writeFile('dog-img.txt', res.body.message, err => {
                console.log('dog link saved');
            });
        })
        .catch(err => {
            console.log(err.message);
        });
    })
    .catch(err => {
        console.log(err);
    });

// Promises