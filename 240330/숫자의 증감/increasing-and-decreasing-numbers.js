const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [c, n] = [(input[0]), Number(input[1])];

let result = '';

if (c === 'A') {
    for (let i = 1; i <= n; i += 1) {
        result += i + ' ';
    }
} else {
    for (let i = n; i > 0; i -= 1) {
        result += i + ' '
    }
}

console.log(result)