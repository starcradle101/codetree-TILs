const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;
let avg = sum / 3;
let sumMinusAvg = sum - avg;

console.log(`${sum}\n${avg}\n${sumMinusAvg}\n`);