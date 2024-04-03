const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ');

result = '';

for (let i = 1; i <= 7; i += 3) {
    result += input[i] + ' ';
}

console.log(result)