const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let sum = a + b + c;
let avg = parseInt(sum / 3);

console.log(`${sum}\n${avg}`);