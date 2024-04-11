const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let answer = input.slice(3, 11);

console.log(answer)