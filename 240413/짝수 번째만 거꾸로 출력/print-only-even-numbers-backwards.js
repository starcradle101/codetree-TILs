const fs = require('fs');
let word = fs.readFileSync(0).toString().trim();

let result = '';

for (let i = word.length - 1; i >= 0; i -= 1) {
    if (i % 2 === 1) {
        result += word[i];
    }
}

console.log(result)