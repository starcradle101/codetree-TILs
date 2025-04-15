const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let prod = a;

for(let i = 1; i <= b; i += 1) {
    a *= a;
}

console.log(prod)