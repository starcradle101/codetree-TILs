const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let triangle = '';

for (let i = 0; i < input; i += 1) {
    for (let j = 1; j <= (2 * j + 1); j += 1) {
        triangle += '*'
    }
    triangle += '\n'
}

console.log(triangle)