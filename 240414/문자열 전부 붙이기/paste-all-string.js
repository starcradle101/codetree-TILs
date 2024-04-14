const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let answer = input.slice(1).join('');


console.log(answer)