const fs = require('fs');
let input = fs.readFileSync(0).toString().split(' ').map(Number);

// 10점 단위로 구분하여 점수대별 학생 수를 출력
// 이것도 몫이 무엇인지에 따라 나누면 될 듯?

let scores = Array(11).fill(0);
for (let i = 0; i < input.length; i += 1) {
    if (input[i] === 0) break;
    let digit = parseInt(input[i] / 10);
    scores[digit] += 1;
}

let result = '';

for (let i = 10; i >= 1; i -= 1) {
    result += `${i}0 - ${scores[i]}\n`
}

console.log(result)