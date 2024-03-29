const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

let result1 = +(a < b && a < c);
let result2 = +(a === b && a === c && b === c);

console.log(result1, result2)