const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let a = Number(input[0][0]);
let b = Number(input[0][2]);
let c = Number(input[1]);

console.log(`${a} ${b} ${c}`);