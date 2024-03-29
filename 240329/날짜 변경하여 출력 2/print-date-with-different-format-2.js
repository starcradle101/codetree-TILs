const fs = require('fs');
let input = fs.readFileSync(0).toString().split('-');

let y = input[2];
let m = input[0];
let d = input[1]

console.log(`${y}.${m}.${d}`);