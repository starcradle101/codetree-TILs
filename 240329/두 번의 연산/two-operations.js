const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let a = input;

if (a % 2=== 1) a += 3;
if (a % 3 === 0) a /= 3;

console.log(a)