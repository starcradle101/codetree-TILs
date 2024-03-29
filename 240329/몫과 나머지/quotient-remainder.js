const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

let product = a * b;
let remainder = a % b;

console.log(`${product}...${remainder}`)