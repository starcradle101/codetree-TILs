const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];
let result = '';

if (a > b) {
    for (let i = a; i => b; i -= 1 ) {
        result += i + ' '
    }
} else {
    for (let i = b; i => a; i -= 1 ) {
        result += i + ' '
    }
}

console.log(result)