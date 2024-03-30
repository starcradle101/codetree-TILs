const fs = require('fs');
let input = (fs.readFileSync(0).toString());

let result = '';
for (let i = 0; i < 8; i += 1) {
    result += input
}

console.log(result)