const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);

let answer = [arr[0]];

for (let i = 1; i < arr.length; i += 1) {
    // 홀수 번째니까 짝수 인덱스
    if (i % 2 === 0) {
        const subArr = arr.slice(0, i + 1);
        answer.push(subArr[Math.floor(i/2)]);
    }
}

console.log(answer.join(' '));