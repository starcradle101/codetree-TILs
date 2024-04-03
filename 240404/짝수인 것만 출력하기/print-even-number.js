const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let answer = [];

for (let i = 0; i < n; i += 1) {
  if (arr[i] % 2 === 0) {
    answer += arr[i];
  }
}

let str = answer.join(' ');

console.log(str)