const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let lengthArr = input.map(el => el.length);

let longestStr = Math.max(...lengthArr);
let shortestStr = Math.min(...lengthArr);

console.log(longestStr - shortestStr);