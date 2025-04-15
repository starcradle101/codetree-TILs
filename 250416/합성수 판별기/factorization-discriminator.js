const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let answer = false;

for(let i = 2; i < n; i += 1) {
    if(n % i === 0) answer = true;
}

console.log(answer ? 'C' : 'N');