const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let others = input[1].split(' ');

let a = Number(input[0]);
let b = Number(others[0]);
let c = Number(others[1]);
let d = Number(others[2]);
let e = Number(others[3]);

console.log(+(a > b))
console.log(+(a > c))
console.log(+(a > d))
console.log(+(a > e))