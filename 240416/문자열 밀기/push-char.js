const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

const answer = input.slice(1) + input.slice(0, 1);

console.log(answer);