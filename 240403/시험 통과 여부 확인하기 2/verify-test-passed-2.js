const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

let result = '';
let cnt = 0;

for (let index = 1; index <= n; index += 1) {
    let scores = input[index].split(' ').map(Number)
    let sum = 0;
    for (let score of scores) {
        sum += (score);
    }
    const avg = sum / (scores.length);
    if (avg >= 60) {
        result += 'pass\n';
        cnt += 1
    } else {
        result += 'fail\n';
    }
}

result += cnt;

console.log(result)

// 중첩 반복문??
// scores 배열 내부의 score들에 대한 평균을 계산하고, 이에 따른 답을 pass 혹은 fail 문자열로 저장하기