const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = 1;

for(let i = a; i <= b; i += 1) {
    prod *= i;
}

console.log(prod)