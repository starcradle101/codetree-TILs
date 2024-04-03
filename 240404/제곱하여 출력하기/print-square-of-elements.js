const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

for (let i = 0; i < n; i += 1) {
    arr[i] = arr[i] ** 2;
}

let str = '';
for (let i = 0; i < n; i += 1) {
    str += arr[i] + ' ';
}

console.log(str)