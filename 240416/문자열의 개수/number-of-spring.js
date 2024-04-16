const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let count = 0;
let record = '';

for (let i = 0; i < input.length; i += 1) {
    if (input[i] == 0) break;
    if (i % 2 === 0) {
        record += input[i] + '\n';
    }
    count += 1;
}

console.log(count);
console.log(record);