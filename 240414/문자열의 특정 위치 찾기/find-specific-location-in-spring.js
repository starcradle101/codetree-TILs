const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [string, char] = input;

let idx = string.indexOf(char);

console.log(idx === -1 ? 'No' : idx);