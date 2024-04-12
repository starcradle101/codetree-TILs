const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const length = input.length;

for (let i = length - 1; i >= 0; i -= 1) {
    console.log(input[i])
}