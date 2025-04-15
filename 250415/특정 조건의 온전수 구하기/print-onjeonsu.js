const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

let answer = '';

for(let i = 1; i <= n; i += 1) {
    if(i % 2 === 0 || i % 10 === 5 || (i % 3 === 0 && i % 9 !== 0)) continue;
    answer += i + ' ';
}

console.log(answer);