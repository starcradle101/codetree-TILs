const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let triangle = '';

for (let i = 1; i <= input; i += 1) {
    triangle += "*".repeat(2 * i + 1) + '\n';
}

console.log(triangle)