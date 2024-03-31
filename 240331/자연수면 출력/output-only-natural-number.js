const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];
let result = '';

if (a > 0) {
    for (let i = 0; i < b; i += 1) {
        result += a;
    }
} else {
    console.log(0);
}

console.log(result);