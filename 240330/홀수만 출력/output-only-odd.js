const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[0]), Number(input[1])];


let result = '';

for (let i = a; i <= b; i+= 2) {
    result += i + ' ';
}

console.log(result)