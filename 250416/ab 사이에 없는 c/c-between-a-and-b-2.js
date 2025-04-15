const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let condition = true;

for(let i = a; i <= b; i += 1) {
    if(i % c === 0) condition = false;
}

console.log(condition ? 'YES' : 'NO')