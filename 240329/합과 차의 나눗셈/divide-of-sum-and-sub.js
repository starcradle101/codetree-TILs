const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);

const sum = a + b;
const sub = a - b;
const result = (sum / sub).toFixed(2);

console.log(result)