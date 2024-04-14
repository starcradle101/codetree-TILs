const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('');

let [firstChar, secondChar] = input.slice(0, 2);

for (let i = 0; i < input.length - 1; i += 1) {
    if (input[i] === firstChar) {
        input[i] = secondChar;
    } else if (input[i] === secondChar) {
        input[i] = firstChar;
    }
}

console.log(input.join(''));