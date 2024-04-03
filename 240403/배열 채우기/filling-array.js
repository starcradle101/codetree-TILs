const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answer = Array(10);

for (let el of input) {
    if (el === 0) break;
    answer.unshift(el);
}

console.log(answer.join(' '));