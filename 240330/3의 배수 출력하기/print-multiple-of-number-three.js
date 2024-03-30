const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let result = '';
let i = 3;

while (i <= input) {
    result += i + ' '
    i += 3;
}

console.log(result)