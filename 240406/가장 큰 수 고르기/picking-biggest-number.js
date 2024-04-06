const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);
const INT_MIN = Number.MIN_SAFE_INTEGER;

let max = INT_MIN;
for (let i = 0; i < input.length; i += 1) {
    if (input[i] > max) max = input[i];
}

console.log(max)