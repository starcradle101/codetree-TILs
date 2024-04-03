const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let sum = 0;
sum += input[2] + input[4] + input[9];

console.log(sum)