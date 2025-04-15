const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let sum = 0;
const cnt = input.length;

for(let num of input) {
    sum += input;
}

const avg = (sum / cnt).toFixed(1);
console.log(sum, avg);

