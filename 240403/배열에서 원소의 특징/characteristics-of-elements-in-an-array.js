const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);
const length = input.length

for (let i = 0 ; i < length; i += 1) {
    if (input[i] % 3 === 0) {
        console.log(input[i - 1]);
        break;
    }
}