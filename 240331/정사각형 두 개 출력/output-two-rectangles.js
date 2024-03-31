const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

let square = '';

for (let i = 0; i < input; i += 1) {
    for (let j = 0; j < input; j += 1) {
        square += '*'
    }
    square += '\n';
}

console.log(square + '\n' + square);