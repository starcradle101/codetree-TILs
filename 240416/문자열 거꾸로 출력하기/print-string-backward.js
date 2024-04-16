const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < 10; i += 1) {
    if (input[i] === 'END') break;
    console.log(input[i].split('').reverse().join(''));
}