const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');
let [string, char] = input;

console.log(string.indexOf(char));