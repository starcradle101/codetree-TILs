const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;

for(let i = a; i <= b; i += 1) {
    sum += i;
}

console.log(sum);