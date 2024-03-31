const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];
let prod = 1;

for (let i = a; i <= b; i += 1) {
    if (i % a === 0) {
        prod *= i;
    }
}

console(prod)