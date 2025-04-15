const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let condition = true;

for(let i = 2; i < n; i += 1) {
    if(n % i === 0) condition = false;
}

console.log(condition ? 'P' : 'C');