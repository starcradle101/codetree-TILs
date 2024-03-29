const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let a = input[0].parseInt();
let b = input[1].parseInt();

console.log(a * b);