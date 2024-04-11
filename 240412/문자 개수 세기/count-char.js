const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [str, queryChar] = input;
let count = 0;

for (let char of str) {
    if (char === queryChar) count += 1;
}

console.log(count);