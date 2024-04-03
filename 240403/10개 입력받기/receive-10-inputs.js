const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sum = 0, cnt = 0;

for (let el of input) {
    if (el === 0) break;
    sum += el;
    cnt += 1;
}

let avg = (sum / cnt).toFixed(1);

console.log(sum, avg);