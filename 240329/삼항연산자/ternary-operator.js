const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let result = input === 100 ? 'pass' : 'failure';

console.log(result);