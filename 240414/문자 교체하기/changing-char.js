const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

let [str1, str2] = input;

let charToShift = str1.slice(0, 2);

console.log(charToShift + str2.slice(2));