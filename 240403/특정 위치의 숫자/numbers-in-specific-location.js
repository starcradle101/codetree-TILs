const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let sum = 0;
for (let el of input) {
    sum += el;
}

console.log(sum)