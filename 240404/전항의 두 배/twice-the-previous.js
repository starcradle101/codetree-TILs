const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let arr = [input[0] ,input[1]];

for (let i = 2; i < 10; i += 1) {
    arr[i] = arr[i - 1] + 2 * arr[i - 2];
}

let answer = arr.join(' ');

console.log(answer)