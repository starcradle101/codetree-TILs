const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('');

let [first, second] = input.slice(0, 2);

for (let i = 0; i < input.length; i += 1) {
    if (input[i] === first) {
        input[i] = second;
    }
}

console.log(input.join(''));