const fs = require('fs');
let n = Number(fs.readFileSync(0).toString());

let arr = [];
arr.push(1, n);

for (let i = 2; i < 100; i += 1) {
    arr[i] = arr[i - 1] + arr[i - 2];
    if (arr[i] > 100) break;
}

let answer = arr.join(' ');

console.log(answer)