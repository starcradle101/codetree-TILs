const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = 1;

for(let i = 1; i <= b; i += 1) {
    prod *= a;
}

console.log(prod)