const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

let result = '';

for (let i = 0; i < n; i += 1) {
    for (let j = (i + 1) * n; j >= (i + 1); j -= n) {
        result += j + ' ';
    }
    result += '\n';
}

console.log(result)