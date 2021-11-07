const fs = require('fs');

const stream = fs.createReadStream('./01-read-file/text.txt', 'utf-8');

stream.on('data', partData => console.log(partData));
stream.on('error', error => console.log('Error', error.message));