const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');
let [string, char] = input;
console.log(string.indexOf(char));