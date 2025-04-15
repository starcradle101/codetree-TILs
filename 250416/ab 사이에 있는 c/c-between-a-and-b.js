const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = false;

for(let i = a; i <= b; i += 1) {
    if(i % c === 0) answer = !answer;
}

console.log(answer ? 'YES' : 'NO')