const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const length = Number(input[0]);
const arr = input[1].split(' ').map(Number);
let accumulation = 0;
let idx = -1

for (let i = 0; i < length; i += 1) {
    if (arr[i] === 2) accumulation += 1;
    if (accumulation === 3) {
        idx = i;
        break;
    }
}


console.log(idx + 1);