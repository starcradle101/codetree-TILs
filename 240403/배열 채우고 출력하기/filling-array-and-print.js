const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = arr.reverse().join('');

console.log(answer)