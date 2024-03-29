const fs = require('fs');
let input = fs.readFileSync(0).toString().split('-');

let y = input[2];
let m = input[1];
let d = input[0]

console.log(`${y}.${m}.${d}`);