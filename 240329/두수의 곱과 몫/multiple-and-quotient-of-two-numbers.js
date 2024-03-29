const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

const product = a * b;
const quotient = parseInt(a / b);

console.log(`${a} * ${b} = ${product}\n${a} / ${b} = ${quotient}`)