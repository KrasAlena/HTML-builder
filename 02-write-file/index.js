const fs = require('fs');
const path = require('path');
const {stdin, exit} = process;

console.log('What is your next goal?');

const newStream = fs.createWriteStream(path.join(__dirname, 'file.txt'));

stdin.on('data', data => {
  data.toString().trim() === 'exit' ? exit() : newStream.write(data);
});

process.on('SIGINT', () => {
  exit();
});

process.on('exit', () => {
  console.log('Good luck!');
  exit();
});