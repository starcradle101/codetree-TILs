const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let answer = input.slice(2, 10);

console.log(answer)