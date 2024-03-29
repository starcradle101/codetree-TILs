const fs = require('fs');
let input = fs.readFileSync(0).toString().split('-');

let region = input[0];
let first = input[1];
let second = input[2];

console.log(`${region}-${second}-${first}`);