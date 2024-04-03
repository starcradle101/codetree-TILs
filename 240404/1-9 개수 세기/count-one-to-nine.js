const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

const n = Number(input[0]);
const arrInput = input[1].split(' ').map(Number);
let arrCount = Array(10).fill(0);
// 1 이상 9 이하

for(let i = 0; i < n; i += 1) {
    arrCount[arrInput[i]] += 1;
}

let answer = '';

for (let i = 1; i < arrCount.length; i += 1) {
    answer += arrCount[i] + '\n';
}

console.log(answer)