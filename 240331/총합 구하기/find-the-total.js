const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];

let sum = 0;

for (let i = a; i <= b; i += 1) {
    if (i % 6 === 0 && i % 8 !== 0) {
        sum += i;
    }
}

console.log(sum)