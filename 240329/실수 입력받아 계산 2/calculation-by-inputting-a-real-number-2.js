const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let result = input + 1.5;

console.log(result.toFixed(2));