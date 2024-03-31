const fs = require('fs');
let input = Number((fs.readFileSync(0).toString()));

let result = ''

for (let i = 1; i <= input; i += 1) {
    if (input % 3 === 0 || input % 2 === 0) {
        result += 1 + ' ';
    } else {
        result += 0 + ' '
    }
}

console.log(result);