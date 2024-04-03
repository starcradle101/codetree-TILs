const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let n = input.length;
let sum = 0;

for (let score of el) {
    sum += score;
}

let avg = (score / n).toFixed(1);

console.log(avg)