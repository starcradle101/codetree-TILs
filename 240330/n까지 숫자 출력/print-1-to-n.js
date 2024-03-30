const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let result = '';
let i = 1;

while (i <= input) {
    result += i + ' '
    i += 1;
}

console.log(result)