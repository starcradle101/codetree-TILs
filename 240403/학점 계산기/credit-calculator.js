const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

let sum = 0, avg = 0;

for (let score of scores) {
    sum += score;
}

avg = (sum / (scores.length)).toFixed(1);
console.log(avg)

if (avg >= 4.0) {
    console.log('Perfect');
} else if (avg >= 3.0) {
    console.log('Good');
} else {
    console.log('Poor');
}