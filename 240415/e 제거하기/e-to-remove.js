const fs = require('fs');
let input = fs.readFileSync(0).toString().trim();

let indexOfFirstE = input.indexOf('e');

let answer = input.slice(0, indexOfFirstE) + input.slice(indexOfFirstE + 1);
console.log(answer);