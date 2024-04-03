const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

let arr = Array(7).fill(0);

for (let i = 0; i < input.length; i += 1) {
    arr[input[i]] += 1;
}

let answer = '';
for (let i = 1; i< arr.length; i += 1) {
    answer += `${i} - ${arr[i]}\n`;
}

console.log(answer)