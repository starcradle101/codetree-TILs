const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let a = Number(input[0]).toFixed(3);
let b = Number(input[1]).toFixed(3);
let c = Number(input[2]).toFixed(3);

console.log(`${a}\n${b}\n${c}`)