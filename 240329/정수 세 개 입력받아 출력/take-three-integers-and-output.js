const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let firstLine = input[0].split(' ');

let a = Number(firstLine[0]);
let b = Number(firstLine[1]);
let c = Number(input[1]);

console.log(`${a} ${b} ${c}`);