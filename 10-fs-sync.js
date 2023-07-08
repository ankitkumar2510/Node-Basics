const {readFileSync, writeFileSync} = require('fs')

console.log('Start');

const first = readFileSync('./content/first-file.txt','utf8');
const second = readFileSync('./content/second-file.txt','utf8');

writeFileSync(
    './content/result-sync.txt',
    `The result is : ${first} ${second}`,
    { flag : 'a'}
)

console.log('done with this task')
console.log('starting the next one')
