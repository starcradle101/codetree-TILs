const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);
const arr = input.slice(1);

let sum = 0;
const cnt = input.length - 1;

for(let num of arr) {
    sum += num;
}

const avg = (sum / cnt).toFixed(1);
console.log(sum, avg);

