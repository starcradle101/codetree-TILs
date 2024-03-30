const fs = require('fs');
let input = (fs.readFileSync(0).toString().split(' '));

let [b, a] = [Number(input[0]), Number(input[1])]
let result = '';

while (a <= b) {
    result += a + ' '
    a -= 2
}

console.log(result)