const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);
let length = input.length;
let sum = 0;

for (let i = 0; i < length; i += 1) {
    if (input[i] === 0) {
        for (let j = i - 1; j >= i - 3; j -= 1 ) {
            sum += input[j];
        }
        break;
    }
}

console.log(sum)