const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [a, b] = [Number(input[1]), Number(input[0])];

let result = '';

for (let i = b; i >= a; i -= 2) {
    result += i + ' ' 
}

console.log(result)