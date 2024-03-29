const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let a = Number(input[1]).toFixed(2);
let b = Number(input[2]).toFixed(2);
let c = input[0].trim();

console.log(`${c}\n${a}\n${b}`);