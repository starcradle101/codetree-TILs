const fs = require("fs");
const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let answer = 0;

for(let i = a; i <= b; i += 1) {
    if(i % 2 === 0) answer += i;
}

console.log(answer);